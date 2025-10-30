import { FaSearch } from 'react-icons/fa'

const ActionCard = ({title, subtext} : {title: string, subtext: string}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
        <div className='p-4 rounded-full bg-blue-100 text-2xl text-blue-600'><FaSearch /></div>
        <div className='flex flex-col items-center mt-2'>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <p>{subtext}</p>
        </div>

    </div>
  )
}

export default ActionCard