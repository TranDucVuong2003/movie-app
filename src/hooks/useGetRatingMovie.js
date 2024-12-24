import { useQuery } from "@tanstack/react-query"
import { onGetRatingMovie } from "../services/api"

export default function useGetRatingMovie() {
    const {data, isPending, isError, error} = useQuery({
        queryKey: ['rating movie'],
        queryFn: onGetRatingMovie
    })
    
    return {data, isPending, isError, error}
}