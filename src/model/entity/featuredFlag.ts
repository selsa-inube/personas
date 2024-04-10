interface IFeaturedFlag {
  [scope: string]: {
    [category: string]: {
      [product: string]: {
        [flagCode: string]: {
          id: string;
          name: string;
          description: string;
          value: boolean;
        };
      };
    };
  };
}

export type { IFeaturedFlag };
