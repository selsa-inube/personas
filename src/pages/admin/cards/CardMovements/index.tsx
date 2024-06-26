import { ISelectOption } from "@design/input/Select/types";
import { useMediaQuery } from "@hooks/useMediaQuery";
import { useAuth } from "@inube/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardsContext } from "src/context/cards";
import { CardMovementsUI } from "./interface";
import { ISelectedProductState } from "./types";
import { addMovementsToCard, validateCreditQuotas } from "./utils";
import { AppContext } from "src/context/app";

function CardMovements() {
  const { card_id, credit_quota_id } = useParams();
  const { creditQuotas, setCreditQuotas } = useContext(CardsContext);
  const [selectedProduct, setSelectedProduct] =
    useState<ISelectedProductState>();
  const [productsOptions, setProductsOptions] = useState<ISelectOption[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { accessToken } = useAuth();
  const { user } = useContext(AppContext);

  const isMobile = useMediaQuery("(max-width: 750px)");

  useEffect(() => {
    handleSortProduct();
  }, [credit_quota_id, user, accessToken, isMobile]);

  const handleSortProduct = async () => {
    if (!card_id || !credit_quota_id || !user || !accessToken) return;

    const { selectCreditQuotas, newCreditQuotas } = await validateCreditQuotas(
      creditQuotas,
      card_id,
      credit_quota_id,
      accessToken,
    );

    setCreditQuotas(newCreditQuotas);

    if (!selectCreditQuotas) return;

    setSelectedProduct({
      movements: selectCreditQuotas.movements?.slice(0, 8) || [],
      totalMovements: selectCreditQuotas.movements?.length || 0,
      option: selectCreditQuotas.id,
    });

    setProductsOptions(
      newCreditQuotas.map((creditQuota) => ({
        id: creditQuota.id,
        value: creditQuota.title,
      })),
    );
  };

  const handleChangeProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: id } = event.target;
    navigate(`/my-cards/${card_id}/movements/${id}`);
  };

  if (!selectedProduct || !selectedProduct.movements) return null;

  const handleAddMovements = () => {
    if (!selectedProduct || !credit_quota_id) return;

    setLoading(true);

    setTimeout(() => {
      try {
        const newMovements = addMovementsToCard(
          selectedProduct,
          creditQuotas,
          credit_quota_id,
        );

        if (newMovements) {
          setSelectedProduct({
            ...selectedProduct,
            movements: [...selectedProduct.movements, ...newMovements],
          });
        }
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <CardMovementsUI
      cardId={card_id}
      creditQuotaId={credit_quota_id}
      productsOptions={productsOptions}
      selectedProduct={selectedProduct}
      loading={loading}
      handleChangeProduct={handleChangeProduct}
      handleAddMovements={handleAddMovements}
    />
  );
}

export { CardMovements };
