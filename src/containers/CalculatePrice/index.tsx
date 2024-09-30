import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
    thickness: string;
    width: string;
    length: string;
    weight: string;
    pricePerKilo: string;
};

type Price = {
    thickness: string;
    width: string;
    length: string;
    weight: string;
    price: number;
    pricePerKilo: number;
};

const CalculatePrice: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const [prices, setPrices] = useState<Price[]>([]);

    const onSubmit = (data: Inputs) => {
        const { thickness, width, length, weight, pricePerKilo } = data;
        const pricePerKiloParsed = parseInt(pricePerKilo);
        const price = parseInt(weight) * pricePerKiloParsed;

        setPrices([
            ...prices,
            {
                thickness,
                width,
                length,
                weight,
                price,
                pricePerKilo: pricePerKiloParsed,
            },
        ]);
    };

    return (
        <section className="container mt-10 mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 p-6 bg-white rounded-md shadow-md">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div>
                            <label
                                htmlFor="thickness"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Espessura (mm)
                            </label>
                            <input
                                id="thickness"
                                type="number"
                                step="0.01"
                                {...register("thickness", {
                                    required:
                                        "Este campo é de preenchimento obrigatório",
                                    min: {
                                        value: 0,
                                        message:
                                            "Espessura deve ser maior que 0",
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 bg-white border ${
                                    errors.thickness
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                            {errors.thickness && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.thickness.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="width"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Largura (mm)
                            </label>
                            <input
                                id="width"
                                type="number"
                                step="0.01"
                                {...register("width", {
                                    required:
                                        "Este campo é de preenchimento obrigatório",
                                    min: {
                                        value: 0,
                                        message: "Largura deve ser maior que 0",
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 bg-white border ${
                                    errors.width
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                            {errors.width && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.width.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="length"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Comprimento (mm)
                            </label>
                            <input
                                id="length"
                                type="number"
                                step="0.01"
                                {...register("length", {
                                    required:
                                        "Este campo é de preenchimento obrigatório",
                                    min: {
                                        value: 0,
                                        message:
                                            "Comprimento deve ser maior que 0",
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 bg-white border ${
                                    errors.length
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                            {errors.length && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.length.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="weight"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Peso (kg)
                            </label>
                            <input
                                id="weight"
                                type="number"
                                step="0.01"
                                {...register("weight", {
                                    required:
                                        "Este campo é de preenchimento obrigatório",
                                    min: {
                                        value: 0,
                                        message: "Peso deve ser maior que 0",
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 bg-white border ${
                                    errors.weight
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                            {errors.weight && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.weight.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="pricePerKilo"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Preço por kilo (R$)
                            </label>
                            <input
                                id="pricePerKilo"
                                type="number"
                                step="0.01"
                                {...register("pricePerKilo", {
                                    required:
                                        "Este campo é de preenchimento obrigatório",
                                    min: {
                                        value: 0,
                                        message: "Preço deve ser maior que 0",
                                    },
                                })}
                                className={`mt-1 block w-full px-3 py-2 bg-white border ${
                                    errors.pricePerKilo
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                            />
                            {errors.pricePerKilo && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.pricePerKilo.message}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Adicionar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-2/3 overflow-x-auto mt-10 md:mt-0 md:ml-6">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Espessura (mm)
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Largura
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Comprimento
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Peso
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Preço por Kilo
                                </th>
                                <th className="px-4 py-2 border border-gray-300 text-left font-semibold">
                                    Preço
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {prices.map((price, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-100"
                                    } hover:bg-gray-50`}
                                >
                                    <td className="px-4 py-2 border border-gray-300">
                                        {price.thickness}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        {price.width}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        {price.length}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        {price.weight}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        R$ {price.pricePerKilo.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        R$ {price.price.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export { CalculatePrice };