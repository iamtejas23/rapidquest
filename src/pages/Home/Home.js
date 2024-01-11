import React from 'react';
import './home.css';
import avtar from '../../assets/avtar.png';
import ContributionOvertime from '../../components/Contribution/ContributionOvertime'
import Rounded from '../../components/RoundedGraph/Rounded';
import ProgressBar from '../../components/Progress/ProgressBar';

const progressData = [
  { description: 'Employee Contribution', progress: '70' },
  { description: 'Retirement Age', progress: '80' },
];

const Home = () => {
  return (
    <div className="home">
      <div className="section"> 
   <div className='first'>
   <div className='avatar'>
      <img src={avtar} alt='avatar' />
      <div className='text'>
        <h1>Hi Mike,</h1>
        Welcome Back
      </div>
    </div>

      <div className='Balance'>
        <h4>Today</h4>
        <h3>$19,892</h3>
        <p>
          Account Balance
        </p>
        <div className='ch4'>
        <h4>
          $4,000
        </h4>
        <p>
          Year-to-Date Contribution
        </p>
        <h4>
          $1,892
        </h4>
        </div>
        <p>Total Interest</p>
      </div>
      <div className='btn1'>
        <button className='btn'>I Want to <select></select> </button>
      </div>
      </div>

{/* Transactions */}
<div className="recent-transactions">
      <h2>Recent Transactions</h2>
      {[
        { id: 1, description: 'Withdrawal Transfer to Bank-XXX11', amount: '$20.00', date: '2020-08-7' },
        { id: 2, description: 'Withdrawal Transfer to Bank-XXX11', amount: '$35.50', date: '2020-07-21' },
        { id: 3, description: 'Withdrawal Transfer to Bank-XXX11', amount: '$35.50', date: '2020-07-16' },
        // Add more transactions as needed
      ].map(transaction => (
        <div key={transaction.id} className="transaction">
          <p className="date">{transaction.date}</p>
          <p className="description">{transaction.description}</p>
          <hr className="line" />
        </div>
      ))}
    </div>

   </div>

    
{/* Second Section */}
      <div className="section">
        <div className='retirenment'>
          <p className='pt'>Retirenment Income</p>
          <h2>Starting Year 2056</h2>
          <div class="retirenment-container">
    <div class="goal">
      <h5>$300,000</h5>
      <p>My Goal</p>
      <hr className="re-line" />
    </div>

    <div class="goal-achieved">
      <h5>59%</h5>
      <p>Goal Achieved</p>
      <hr className="re-line" />
    </div>

    <div class="monthly-income">
      <h5>$300</h5>
      <p>Est. Monthly Income</p>
      <hr className="re-line" />
    </div>
  </div>

  <ContributionOvertime/>
        </div>
{/* Comapare peers */}
        <div className='peers'>
          <h4>How do I comapare to my peers?</h4>
          <p>These numbers represent current goal achievement</p>
        </div>
        <div className='ronds'>
          <div>
            <p>Age: Under 30 <select/></p>
            <p>Salary:K 20-K 30 <select/></p>
            <p>Gender: Male <select/></p>
          </div>
      <Rounded title="Age" />
      <Rounded title="Salary" />
      <Rounded title="Gender" />
        </div>
      </div>



      {/* Third Section */}
      <div className="section">
      <div>
      <h4>Retirenment Stratergy</h4>
      
      {progressData.map((data, index) => (
        <ProgressBar key={index} description={data.description} progress={parseInt(data.progress, 10)} />
      ))}
      <hr className="line-3" />
    </div>
    
    <div className='lst'>
  <div>
    <h4>Employee Contribution</h4>
    <p>8.4%</p>
  </div>
  <div>
    <h4>Interest Rate</h4>
    <p>5%</p>
  </div>
</div>
<div className='btn2'>
        <button className='btn'>Update</button>
      </div>
<div className='docs'>
  <p>View Help Docs {'>'}</p>
</div>
{/* last section */}
<div className="custom-colored-stick-section">
      <div className="custom-colored-stick"></div>
      <div className="custom-text-content">
        <p>
          Are you considering a <br/>
          <span>Housing Advance?</span> <br/>
          limited time resuced interest.
          
        </p>
        <h6>Learn More {'>'}</h6>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Home;