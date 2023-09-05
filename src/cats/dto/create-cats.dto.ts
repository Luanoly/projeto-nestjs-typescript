import { IsNotEmpty, MinLength, NotEquals } from "class-validator";

export class CreateCatDto {
    id: number;

    @IsNotEmpty()
    @MinLength(2, {})
    @NotEquals(" ")
    nome: string;
    raca: string;
    corOlhos: string;
}