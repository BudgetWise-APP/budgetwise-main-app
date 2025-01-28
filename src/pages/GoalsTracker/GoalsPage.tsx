import Spinner from '@/components/Spinner'
import { useGoalsPage } from './useGoalsPage'
import Box from '@/components/Box'
import ProgressBar from '@/components/ProgressBar'

const GoalsPage = () => {
  const {
    isLoading,
    goals,
    deleteGoalMutate,
    navigate,
    favoriteClassName,
    setFavoriteMutation,
  } = useGoalsPage()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  if (goals?.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1>No goals found</h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {goals?.map((goalItem) => {
        const { _id, title, description, goal, currentStatus, isFavorite } =
          goalItem
        return (
          <Box key={_id}>
            <div className="flex items-center w-full relative">
              <div className="absolute top-0 right-0">
                <button
                  onClick={() =>
                    isFavorite
                      ? setFavoriteMutation({ goalId: _id, isFavorite: false })
                      : setFavoriteMutation({ goalId: _id, isFavorite: true })
                  }
                  className={`px-2 py-1 transition text-lg font-bold border rounded-[44px] shadow-default-shadow  w-[40px] h-[40px] ${isFavorite ? favoriteClassName.selected : favoriteClassName.default}`}
                >
                  <i className="fa-regular fa-star"></i>
                </button>
                <button
                  onClick={() => navigate(`/edit-goal/${_id}`)}
                  className={`mx-2 px-2 py-1 transition text-lg font-bold border rounded-[44px] shadow-default-shadow  w-[40px] h-[40px] bg-white text-black hover:bg-blue-500 hover:text-white`}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  onClick={() => deleteGoalMutate(_id)}
                  className={`px-2 py-1 transition text-lg font-bold border rounded-[44px] shadow-default-shadow  w-[40px] h-[40px] bg-red-500 text-white hover:bg-red-700`}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
              <div className="flex flex-col">
                <div className="text-md font-bold text-gray-600">{title}</div>
                <div className="text-sm italic text-gray-600 mb-2">
                  {description}
                </div>
                <ProgressBar initialValue={currentStatus} finalValue={goal} />
              </div>
            </div>
          </Box>
        )
      })}
    </div>
  )
}

export default GoalsPage
