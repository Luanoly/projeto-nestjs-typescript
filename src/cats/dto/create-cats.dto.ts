import { IsAlpha, IsNotEmpty, MinLength, NotEquals } from "class-validator";

export class CreateCatDto {
    id: number;

    @IsNotEmpty()
    @MinLength(2, {})
    @NotEquals(" ")
    nome: string;


    raca: string;

    @IsAlpha("pt-BR", {message: "faiou"})
    corOlhos: string;
}