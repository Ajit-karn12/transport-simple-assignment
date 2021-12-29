import React from 'react'
import calendaricon from '../assets/calendaricon.png'
import fill_1 from '../assets/fill_1.png'
import Charts from './Charts'
import threedot from '../assets/threedot.png'
import searchicon from '../assets/searchicon.png'

function MidSection() {
    return (
        <div className='mid-section-container'>
        <div className='summary-container'>
              <h1 className='summary'>Summary</h1>
            <div className='date-container'>
                <p className='date'>12 JUNE 2018 - 12 JULY 2018</p>
                <img src={calendaricon} alt=""/>
            </div>
        </div>
        <div className='account-detail'>
            <div className='account-holder'>
                <p className='account-description'>Acc. No.:<span className='account-span'>1234567890QWERTY</span></p>
                <p className='account-description'>Acc. Holder.:<span className='account-span'> Jasdeep Singh</span></p>
                <p className='account-description'>Bank : <span className='account-span'>HDFC Bank</span></p>
            </div>
            <div className='account-holder'>
                <p className='account-description'>Branch: <span className='account-span'>Kasturi Nagar Branch</span></p>
                <p className='account-description'>IFSC.: <span className='account-span'>HDFC12345</span></p>
            </div>
            <div className='button-container'>
            <button className='active-button'>Active</button>
            </div>
        </div>
        <div className='amount-container'>
        <div className='bigning-balance'>
            <div >
              <p className='bigning-amount'>Begining Balance</p>
              <h1 className='amount'>Rs 20,000</h1>
            </div>
            <img src={fill_1} alt=""
                className='amount-logo'
            />
        </div>
        <div className='going-balance'>
            <div className='going-in'>
                <div>
                   <p className='bigning-amount'>Going in</p>
                    <h1 className='amount'>Rs 20,000</h1>
                </div>
                <img src={fill_1} alt=""
                className='amount-logo'
            />
            </div>
            <div className='going-in'>
                <div>
                   <p className='bigning-amount'>Going Out</p>
                    <h1 className='amount'>Rs 20,000</h1>
                </div>
                <img src={fill_1} alt=""
                className='amount-logo'
            />
            </div>
            
        </div>
        <div className='ending-balance'>
            <div >
              <p className='bigning-amount'>Ending Balance</p>
              <h1 className='amount'>Rs 20,000</h1>
            </div>
            <img src={fill_1} alt=""
                className='amount-logo'
            />
    {/* chart here */}
        </div>

        </div>
        <div className="charts">
            <div className='chart-description-container'>
              <h1 className='cash-summary'>Cash Summary</h1>
                <div className='month-week'>
                    <div className='april-description'>
                        <p className='april'>April</p>
                        <span className='main-8-dropdown'><i class="fas fa-sort-down"></i></span>
                    </div>
               <div className='april-description'>
                      <p className='april'>week</p>
                      <span className='main-8-dropdown'><i class="fas fa-sort-down"></i></span>
                </div>
                <div>
              <img src={threedot}/>
             </div>
            
               </div>
            </div>
            <div className='month-value'>
                <div className='value'>
                <button className='value-april-btn'></button>
                <p className='value-name'>value april</p>
                </div>
                <div className='value'>
                <button className='value-march-btn'></button>
                <p className='value-name'>value march</p>
                </div>
            </div>
            <Charts />
            <div className='table-1'>
                <div className='table-1-description'>
                    <p className='transaction'>Transction</p>
                    <p className='all'>ALL</p>
                    <p className='deposit'>Deposits</p>
                    <p className='withdrawal'>Withdrawals</p>
                    <div className='search-icon-container'>
                        <input type="search" placeholder='search'
                         className='table-search'>
                        </input>
                        <img src={searchicon} className='table-icon-search'/>
                    </div>
                    <p className='showing'>Showing</p>
                    <p className='number'>5
                    <span className='sort-drop'><i class="fas fa-sort-down"></i></span></p>
                    <img src={threedot} className='threedot'/>
                </div>

               <table className='table-1-data'>
                <tr className='table-row'>
                <th> Date</th>
                <th> TRANSACTION DETAIL</th>
                <th>WITHDRAWAL</th>
                <th>DEPOSIT</th>
                <th>RUNNING BALANCE</th>
                </tr>
                <tr className='table-row'>
                    <td>01/19/2018</td>
                    <td>IIN/I-Debit/Citrus pa/xxxxxxxx93711</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                </tr>
                <tr className='table-row'>
                    <td>01/19/2018</td>
                    <td>IIN/I-Debit/Citrus pa/xxxxxxxx93711</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                </tr>
                <tr className='table-row'>
                    <td>01/19/2018</td>
                    <td>IIN/I-Debit/Citrus pa/xxxxxxxx93711</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                </tr>
                <tr className='table-row'>
                    <td>01/19/2018</td>
                    <td>IIN/I-Debit/Citrus pa/xxxxxxxx93711</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                    <td>₹ 5,000</td>
                </tr>
                </table>
            </div>
        </div>
       <button className='back-button'>Back</button>
        </div>
    )
}

export default MidSection
