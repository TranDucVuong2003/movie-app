import { useQuery } from '@tanstack/react-query'
import { onGetMovie } from '../services/api'

export default function useGetMovie() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['all-movie'],
        queryFn: onGetMovie
    })
    return { data, isPending, isError, error }
}

