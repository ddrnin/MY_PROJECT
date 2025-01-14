import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	let post = '강남 우동 맛집';

	let [month, c] = useState('1');
	let [day, d] = useState('13');
	let [title01,b1] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
	let [primary_color, e] = useState(['red']);
	// let [title02, b2] = useState('강남 우동 맛집');
	// let [title03, b3] = useState('파이썬 독학');

	return (
		<div className='App'>
			<div className='black_nav'>
				<h4>ReactBlog</h4>
			</div>
			<div className='list'>
				<h4 style={{color: primary_color}}>{title01[0]}</h4>
				<p>{month}월 {day}일 발행</p>
			</div>
			<div className='list'>
				<h4>{title01[1]}</h4>
				<p>{month}월 {day}일 발행</p>
			</div>
			<div className='list'>
				<h4>{title01[2]}</h4>
				<p>{month}월 {day}일 발행</p>
			</div>
			<h4 style={ {color:primary_color, fontSize : '20px'} }>{post}</h4>
		</div>
	)
}

export default App
