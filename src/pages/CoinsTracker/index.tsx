import Box from '@/components/Box';
import PageTitle from '@/components/PageTitle';
import { useCoinsTracker } from './useCoinsTracker';

const CoinsTracker = () => {
    const {data} = useCoinsTracker()
    console.log('data', data)
    return (
        <Box>
            <div className="flex flex-col w-full">
                <PageTitle>Coins Tracker</PageTitle>
            </div>
        </Box>
    );
};

export default CoinsTracker;