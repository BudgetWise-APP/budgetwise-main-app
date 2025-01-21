import Box from '@/components/Box';
import { useDashboard } from './useDashboard';
import {CurrencyDollarIcon } from '@heroicons/react/24/outline';
import PageTitle from '@/components/PageTitle';

const Dashboard = () => {
    const {cryptoAmount, isLoading} = useDashboard()

    return (
        <div>
            <PageTitle>Dashboard</PageTitle>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(248px,_1fr))] gap-4 mb-6 justify-between'>
                <Box isLoading={isLoading}>
                   <div className='flex items-center w-full'>
                        <CurrencyDollarIcon width={24} className='flex-shrink-0 mr-2'/>
                        <div className='flex flex-col'>
                            <div className='text-sm font-semibold text-gray-600'>Crypto balance</div>
                            <div className='font-bold text-xl'>{cryptoAmount?.toFixed(5)}</div>
                        </div>
                   </div>
                </Box>
                <Box>
                    In development...
                </Box>
                <Box>
                    In development...
                </Box>
                <Box>
                    In development...
                </Box>
            </div> 
        </div>
    );
};

export default Dashboard;