interface Medicine{
    getCode(): number;
    getName(): string;
    getPrice(): number;
    getPrescription(): boolean;
    setPrice(nPrice: number): void;
    setPrescription(nPrescription: boolean): void;
}