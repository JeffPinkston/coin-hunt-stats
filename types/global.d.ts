export {}

declare global {
    interface Cubie {
        ID: number,
        CubieName: string,
        CustomCubieName: string,
        CustomBPName: string,
        Tier: string,
        SingleUse: boolean,
        Randomizer: boolean,
        WillReturn: boolean,
        HasBP: boolean,
        RecipeItem1: string,
        RecipeQty1: number,
        RecipeItem2: string,
        RecipeQty2: number,
        RecipeItem3: string,
        RecipeQty3: number,
        RecipeItem4: string,
        RecipeQty4: number,
        ExistingBP: string,
        MaximumBP: string,
        MaximumCubie: string,
        FlavorText: string,
        ReleaseDate: Date,
        ReleaseYear: Date,
        Category: string,
        EventName: string,
        FTPPlayer: string,
        FTPDate: Date,
        ImageUrl: string,
    }
}