import {useQuery} from '@tanstack/react-query'
import type {transaction} from "./useLocalData.types";

const fetchTransactionData = async (): Promise<transaction[]> => {

    const response = await fetch('./data.json')
    console.log(response)
    if (!response) {
        throw new Error('Failed to fetch transaction data')
    }
    return response.json()
}

export function useTransactionData() {
    return useQuery<transaction[], Error>({
        queryKey: ['transactionData'],
        queryFn: fetchTransactionData,
    })
}