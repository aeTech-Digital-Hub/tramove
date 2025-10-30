import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'

// Define interfaces for our data types
interface Transaction {
  id: string;
  shipper: string;
  date: string;
  amount: string;
  status: 'paid' | 'income';
  balance: string;
}

const Earnings = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'accounts'>('overview');
  const [timeFilter, _setTimeFilter] = useState('Month');

  // Sample transaction data
  const transactions: Transaction[] = [
    { id: 'SH-78493', shipper: 'Adam Logistics', date: 'May 2, 2025', amount: '₦750.00', status: 'paid', balance: 'GHS 38,000.00' },
    { id: 'SH-40138', shipper: 'Taiwood Goods', date: 'May 3, 2025', amount: '₦980.50', status: 'paid', balance: 'GHS 25,000.00' },
    { id: 'SH-37135', shipper: 'Temo Distributors', date: 'May 3, 2025', amount: '₦545.75', status: 'income', balance: 'GHS 18,000.00' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className='flex flex-col gap-1'>
          <h1 className="text-2xl font-bold w-[400px]">Earnings</h1>
          <p>Track and manage your earnings, escrow funds, and account balances.</p>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex border-b">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 font-medium ${activeTab === 'overview' ? 'border-b-2 border-red text-red' : 'text-gray-500'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('accounts')}
          className={`px-4 py-2 font-medium ${activeTab === 'accounts' ? 'border-b-2 border-red text-red' : 'text-gray-500'}`}
        >
          Accounts
        </button>
      </div>

      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#22C55E"/>
                    </svg>
                  </div>
                  <span className="font-medium">Total Earnings</span>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-3xl font-bold">GHS 24.8K</h2>
                <p className="text-sm text-green-600">+20% from last month</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#22C55E"/>
                    </svg>
                  </div>
                  <span className="font-medium">Account Balances</span>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-3xl font-bold">GHS 100k</h2>
                <p className="text-sm text-gray-500">5 active accounts</p>
              </div>
            </div>
          </div>

          {/* Earning Trends */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Earning Trends</h2>
              <div className="relative">
                <button className="flex items-center border rounded-md px-3 py-1 text-sm">
                  {timeFilter} <FaChevronDown className="ml-2" size={12} />
                </button>
              </div>
            </div>
            <div className="h-80 bg-white p-4 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Monthly Earnings (2025)</h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-gray-600">Income</span>
                  </div>
                </div>
              </div>
              
              {/* Y-axis labels */}
              <div className="absolute left-0 top-14 bottom-10 flex flex-col justify-between text-xs text-gray-500">
                <span>₦100k</span>
                <span>₦80k</span>
                <span>₦60k</span>
                <span>₦40k</span>
                <span>₦20k</span>
                <span>₦0</span>
              </div>
              
              {/* Horizontal grid lines */}
              <div className="absolute left-10 right-4 top-14 bottom-10">
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-gray-100 w-full"></div>
                  <div className="border-t border-gray-100 w-full"></div>
                  <div className="border-t border-gray-100 w-full"></div>
                  <div className="border-t border-gray-100 w-full"></div>
                  <div className="border-t border-gray-100 w-full"></div>
                  <div className="border-t border-gray-100 w-full"></div>
                </div>
              </div>
              
              {/* Chart bars */}
              <div className="h-[170px] ml-10 mr-4 mt-14 flex items-end justify-between">
                <div className="w-[7%] h-[33%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦33k</div>
                </div>
                <div className="w-[7%] h-[20%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦20k</div>
                </div>
                <div className="w-[7%] h-[40%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦40k</div>
                </div>
                <div className="w-[7%] h-[25%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦25k</div>
                </div>
                <div className="w-[7%] h-[60%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦60k</div>
                </div>
                <div className="w-[7%] h-[75%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦75k</div>
                </div>
                <div className="w-[7%] h-[40%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦40k</div>
                </div>
                <div className="w-[7%] h-[33%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦33k</div>
                </div>
                <div className="w-[7%] h-[60%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦60k</div>
                </div>
                <div className="w-[7%] h-[20%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦20k</div>
                </div>
                <div className="w-[7%] h-[75%] bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦75k</div>
                </div>
                <div className="w-[7%] h-full bg-gradient-to-t from-red to-deep-red rounded-t hover:opacity-80 transition-opacity group relative">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">₦100k</div>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-2 text-xs text-gray-500 ml-10 mr-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
                <button className="flex items-center gap-2 px-4 py-1 border border-red text-red rounded-full text-sm">
                  <FiDownload className="h-4 w-4" />
                  Export
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="p-4 border-b">
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-sm mb-1">Filter by Date</p>
                  <div className="relative">
                    <select className="border rounded-md px-3 py-2 pr-8 appearance-none bg-white text-sm">
                      <option>Last 30 days</option>
                      <option>Last 60 days</option>
                      <option>Last 90 days</option>
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <FaChevronDown size={12} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm mb-1">Filter by Status</p>
                  <div className="relative">
                    <select className="border rounded-md px-3 py-2 pr-8 appearance-none bg-white text-sm">
                      <option>All</option>
                      <option>Paid</option>
                      <option>Income</option>
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <FaChevronDown size={12} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm mb-1">Name</p>
                  <input 
                    type="text"
                    placeholder="Enter name"
                    className="border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500">
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Shipper</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Acc balance</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="border-t">
                      <td className="px-4 py-4 text-sm">{transaction.id}</td>
                      <td className="px-4 py-4 text-sm">{transaction.shipper}</td>
                      <td className="px-4 py-4 text-sm">{transaction.date}</td>
                      <td className="px-4 py-4 text-sm">{transaction.amount}</td>
                      <td className="px-4 py-4 text-sm">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          transaction.status === 'paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {transaction.status === 'paid' ? 'Paid' : 'Income'}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm">{transaction.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-end gap-6 border-t p-4">
              <button className="flex items-center gap-1 text-sm text-gray-600 border rounded-md px-3 py-1">
                <span>Previous</span>
              </button>
              
              <div className="flex items-center gap-1">
                <button className="h-8 w-8 rounded-md bg-red text-white flex items-center justify-center text-sm">1</button>
                <button className="h-8 w-8 rounded-md border flex items-center justify-center text-sm">2</button>
                <button className="h-8 w-8 rounded-md border flex items-center justify-center text-sm">3</button>
              </div>
              
              <button className="flex items-center gap-1 text-sm text-white bg-gradient-to-b from-red to-deep-red px-3 py-1 rounded-md">
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Accounts Tab Content */}
      {activeTab === 'accounts' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h2 className="text-lg font-semibold">Account Balances</h2>
                  <p className="text-sm text-gray-500">View detailed account balances for all users.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-1 border border-red text-red rounded-full text-sm">
                  <FiDownload className="h-4 w-4" />
                  Export
                </button>
              </div>
            </div>
            
            {/* Filters */}
            <div className="p-4 border-b">
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-sm mb-1">Filter by Status</p>
                  <div className="relative">
                    <select className="border rounded-md px-3 py-2 pr-8 appearance-none bg-white text-sm">
                      <option>All</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <FaChevronDown size={12} className="text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm mb-1">Name</p>
                  <input 
                    type="text"
                    placeholder="Enter name"
                    className="border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Accounts Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500">
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Acc balance</th>
                    <th className="px-4 py-3">Last transaction</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-4 text-sm">Adam Logistics</td>
                    <td className="px-4 py-4 text-sm">₦38,000.00</td>
                    <td className="px-4 py-4 text-sm">May 2, 2025</td>
                    <td className="px-4 py-4 text-sm">
                      <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-4 text-sm">Taiwood Goods</td>
                    <td className="px-4 py-4 text-sm">₦25,000.00</td>
                    <td className="px-4 py-4 text-sm">May 3, 2025</td>
                    <td className="px-4 py-4 text-sm">
                      <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-4 text-sm">Temo Distributors</td>
                    <td className="px-4 py-4 text-sm">₦18,000.00</td>
                    <td className="px-4 py-4 text-sm">May 4, 2025</td>
                    <td className="px-4 py-4 text-sm">
                      <span className="inline-flex rounded-full px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-end gap-6 border-t p-4">
              <button className="flex items-center gap-1 text-sm text-gray-600">
                <span>Previous</span>
              </button>
              
              <div className="flex items-center gap-1">
                <button className="h-8 w-8 rounded-md bg-red text-white flex items-center justify-center text-sm">1</button>
                <button className="h-8 w-8 rounded-md border flex items-center justify-center text-sm">2</button>
                <button className="h-8 w-8 rounded-md border flex items-center justify-center text-sm">3</button>
              </div>
              
              <button className="flex items-center gap-1 text-sm text-white bg-gradient-to-b from-red to-deep-red px-3 py-1 rounded-md">
                <span>Next</span> 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Earnings