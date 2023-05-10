import React, { useEffect, useState } from "react";
import "./main.css";
import { redirect } from "react-router-dom";

function VideoList(props) {
	const [vidList, setVidList] = useState([]);
	const [search, setSearch] = useState("");
    const [red, setRed] = useState(false)

	const temp = props.items;
	useEffect(() => {
		setVidList(props.items);
	}, []);

	const handleSearch = () => {
		if (!search) {
			alert("first write something to search");
			return setVidList(temp);
		}
		const searchItem = vidList.filter((item) => {
			if (item.title.toLowerCase() === search.toLowerCase()) return item;
		});
		setVidList(searchItem);
	};

	const handleView = (id) => {
        const newArr = vidList.filter(item => item.id === id)
        setRed(true)
        redirect('/video',newArr)
	};

    // if(red){
    //     return redirect('/video',)
    // }

	return (
		<div className="container">
			<h1>Videos</h1>
			<hr />
			<div className="mr_4">
            <input
				type="text"
				value={search}
				className="inp_search"
				placeholder="search here..."
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button onClick={() => handleSearch()} className="search_btn">
				Submit
			</button>
            </div>
			{vidList.map((item) => (
				<div className="row" key={item.id} onClick={() => handleView(item.id)}>
					<div>
						<img src={item.thumbnailUrl} alt={item.author} className="img_1" />
					</div>
					<div className="pd_1">
						<p>{item.title}</p>
						{item.description}
					</div>
				</div>
			))}
		</div>
	);
}

export default VideoList;
