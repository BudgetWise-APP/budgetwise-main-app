import { getGoals, deleteGoal, updateGoal, setFavorite } from '@/api/plannerApi'
import { GoalType } from '@/api/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const useGoalsPage = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: goals, isLoading } = useQuery<GoalType[]>({
    queryKey: ['getGoals'],
    queryFn: getGoals,
  })

  const { mutate: deleteGoalMutate } = useMutation({
    mutationFn: deleteGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getGoals'] })
    },
  })

  const { mutate: updateGoalMutate } = useMutation({
    mutationFn: updateGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getGoals'] })
    },
  })

  const { mutate: setFavoriteMutation } = useMutation({
    mutationFn: setFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getGoals'] })
    },
    onError: (error) => {
      alert(error?.response?.data?.detail)
    },
  })

  const favoriteClassName = {
    default: 'bg-white text-black hover:bg-blue-500 hover:text-white',
    selected: 'bg-blue-500 text-white hover:bg-white hover:text-black',
  }

  return {
    isLoading,
    goals,
    deleteGoalMutate,
    navigate,
    favoriteClassName,
    setFavoriteMutation,
  }
}
