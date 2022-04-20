// // import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

// // const data = [
// //   {
// //     count: 809680,
// //     language: "Telugu",
// //   },
// //   {
// //     count: 4555697,
// //     language: "Hindi",
// //   },
// //   {
// //     count: 12345657,
// //     language: "English",
// //   },
// // ]

// // const Piechart = () => {
// //   return (
// //     <ResponsiveContainer width="100%" height={300}>
// //       <PieChart>
// //         <Pie
// //           cx="70%"
// //           cy="40%"
// //           data={data}
// //           startAngle={0}
// //           endAngle={360}
// //           innerRadius="40%"
// //           outerRadius="70%"
// //           dataKey="count"
// //         >
// //           <Cell name="Telugu" fill="#fecba6" />
// //           <Cell name="Hindi" fill="#b3d23f" />
// //           <Cell name="English" fill="#a44c9e" />
// //         </Pie>
// //         <Legend
// //           iconType="circle"
// //           layout="vertical"
// //           verticalAlign="middle"
// //           align="right"
// //         />
// //       </PieChart>
// //     </ResponsiveContainer>
// //   )
// // }

// // export default Piechart


// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
// import "./index.css"

// const data01 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
// ];

// const data02 = [
//   { name: 'Group A', value: 2400 },
//   { name: 'Group B', value: 4567 },
//   { name: 'Group C', value: 1398 },
//   { name: 'Group D', value: 9800 },
//   { name: 'Group E', value: 3908 },
//   { name: 'Group F', value: 4800 },
// ];

// export default class Piechart extends PureComponent {
    
// //   static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

//   render() {
//     const {eachitem}=this.props
//     console.log("i am each item in piechart", eachitem)
    
//     // console.log("we are workouts",this.props)
//     const{workouts}=eachitem
//     console.log("i am workouts")

//     return (
//         // <div className="piecontainer">
//     //   <ResponsiveContainer width="100%" height="100%">
//     //     <PieChart width={400} height={400}>
//     //       <Pie
//     //         dataKey="value"
//     //         isAnimationActive={false}
//     //         data={data01}
//     //         cx="50%"
//     //         cy="50%"
//     //         outerRadius={80}
//     //         fill="#8884d8"
//     //         label
//     //       />
//     //       <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
//     //       <Tooltip />
//     //     </PieChart>
//     //   </ResponsiveContainer>
//     //   </div>
//     <ResponsiveContainer width="100%" height="100%">
//         <PieChart width={400} height={400}>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data01}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
//           <Tooltip />
//         </PieChart>
//       </ResponsiveContainer>
//     );
//   }
// }

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import "./index.css" 
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.nameofworkout}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Caloriesburned ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Graph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const {eachitem}=this.props
        console.log("i am each item in piechart", eachitem)
        const{workouts}=eachitem


      //   function dynamicsort(property,order) {
      //     var sort_order = 1;
      //     if(order === "desc"){
      //         sort_order = -1;
      //     }
      //     return function (a, b){
      //         // a should come before b in the sorted order
      //         if(a[property] < b[property]){
      //                 return -1 * sort_order;
      //         // a should come after b in the sorted order
      //         }else if(a[property] > b[property]){
      //                 return 1 * sort_order;
      //         // a and b are the same
      //         }else{
      //                 return 0 * sort_order;
      //         }
      //     }
      // }


      // console.log("wanted data formate",workouts.sort(dynamicsort("date","desc")));










        
        // console.log("we are workouts",this.props)
       
        console.log("i am workouts")
    return (
      <li className='graph-main-card'>
      <div className='piecontainer shadow'>
        <PieChart width={500} height={400} className="checking">
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={workouts}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="calories"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
        <div>
          <h1 >date:{eachitem.date}</h1>
          <p>total time spent today:{eachitem.total_time} seconds</p>
          <p>total calories burned today:{eachitem.total_calories} calories</p>

        </div>
        </div>
        </li>
    );
  }
}
