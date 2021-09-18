import { useContext } from "react";
import Plot from "react-plotly.js";
import EntryContext from "../Store/EntryContext";

const Dashboard = () => {

    const ctx = useContext(EntryContext)
	let temp = Array(ctx.categoryList.length).fill(0)
	
	for (let i =0; i<ctx.spendList.length; i++){
		let index = ctx.categoryList.indexOf(ctx.spendList[i].category)
		temp[index] += ctx.spendList[i].amount
	}

    var data = [{
        values: temp,
        labels: ctx.categoryList,
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };

    return(<Plot data={data} layout={layout}/>)
}
 
export default Dashboard;




  
  