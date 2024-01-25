import React from "react";

import { TodoListFetch } from "./TodoListFetch";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		
			<TodoListFetch/>
			
		</div>
	);
};

export default Home;
