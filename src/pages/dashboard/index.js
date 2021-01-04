import React, { useEffect, useState } from 'react';
import { Images } from '../../assets';
import APIServices from '../../services/api-service';
import './index.scss';

//Utilities
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Line } from 'react-chartjs-2';


function Dashboard() {
  const apiServices = new APIServices();
  const [lastMonthStatus, setlastMonthStatus] = useState([])
  const [author, setAuthor] = useState([])
  const [tableData, setTableData] = useState([])
  const [totalPage, setTotalPage] = useState('')
  const [chartData, setChartData] = useState(undefined)
  const [active, setactive] = useState(1)
  let items = [];
  const percentage = 76;

  useEffect(() => {
    const month = apiServices.getLastMonthData();
    const authorData = apiServices.getAuthorData();
    const Tabledetails = apiServices.getTableData();
    const salesGraph = apiServices.getSalesGraphData();
    var totalData = month[0].data;
    var author = authorData[0].data;
    var tableinfo = Tabledetails[0].data;
    var pages = Tabledetails[0].totalPage;
    var salesGraphData = salesGraph[0].data;
    setChartData(salesGraphData)
    setlastMonthStatus(totalData);
    setAuthor(author);
    setTableData(tableinfo)
    setTotalPage(pages)
    console.log("sales", salesGraph, "filter", salesGraphData)
    return () => {
    }
  }, [])

  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className="dashboard">
      <h2>Home <span className="screen-name"> Dashboard  | </span><span className="version-name">Version 2</span></h2><br />
      <div className="dashboard-top">
        <div className="left">
          <div className="card-container">
            <div className="card">
              <img src={Images.upload} alt={''} />
              <h4>Today's upload</h4>
              <h3>205</h3>
            </div>
            <div className="card">
              <img src={Images.newLead} alt={''} />
              <h4>New Leads</h4>
              <h3>205</h3>
            </div>
            <div className="card">
              <img src={Images.totalSale} alt={''} />
              <h4>Total sales</h4>
              <h3>205</h3>
            </div>
            <div className="card">
              <img src={Images.currency} alt={''} />
              <h3>23121</h3>
            </div>
            <div className="card">
              <img src={Images.settings} alt={''} />
              <h3>205</h3>
            </div>
            <div className="card">
              <img src={Images.alert} alt={''} />
              <h3>205</h3>
            </div>
          </div><br />
          <div className="past-month-details">
            <h3>Last Month Summary</h3>
            <div className="summary">
              <Table  size="sm">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {lastMonthStatus.map((e, i) => < tr key={i}>
                    <td>{Object.keys(e)}</td>
                    <td className={`${Object.values(e)}  price`}>{Object.values(e)} </td>
                  </tr>)}
                </tbody>
              </Table>
              <div className="progress-meter">
                <CircularProgressbar value={percentage} />
                <div className="legends">
                  <div className="single-legend">
                    <p style={{ height: '15px', width: '30px', backgroundColor: 'rgb(102, 51, 153)', borderRadius: '5px' }}></p>   Completed
                  </div>
                  <div className="single-legend">
                    <p style={{ height: '15px', width: '30px', backgroundColor: '#EFEFEF', borderRadius: '5px' }}></p>   Pending
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="sales-container">
            <Line
              data={chartData}
              options={{
                scales: {
                  xAxes: [{
                    display: false,
                    tooltips: false,
                  }],
                  yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    tooltips: false,
                  }]
                },
                title: {
                  display: false,
                  fontSize: 25
                },
                legend: {
                  display: false,
                  position: 'right'
                }
              }}
            />
          </div><br />
          <div className="top-authers">
            {author.map((e, i) =>
              <div className="author">
                <div className="personal-detail">
                  <img src={Images.user} alt={''} />
                  <div className="name-block">
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                  </div>
                </div>
                <button>Follow</button>
              </div>)}
          </div>
        </div>
      </div><br />
      <div className="table-block">
        <div className="data-table">
          <Table hover size="sm">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Category</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((e, i) => < tr key={i}>
                <td style={{ textAlign: 'center' }}>    <img src={Images.user} alt={''} /></td>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{e.description}</td>
              </tr>)}
            </tbody>
          </Table>

        </div>
        <div className="pagination">
          <h4>{tableData.length}{" "}{"total"}</h4>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {items}
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
