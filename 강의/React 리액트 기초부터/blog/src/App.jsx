/* eslint-disable */ 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	let post = '강남 우동 맛집';

	// let [month, c] = useState('1');
	// let [day, d] = useState('13');
	let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
	let [primary_color, e] = useState('red');
	let [good, goodUp] = useState([0, 0, 0]);
	let [modal, setModal] = useState(false);

	function btn_good(){
		good += 1
	}

	return (
		<div className='App'>
			<div className='black_nav'>
				<h4>ReactBlog</h4>
			</div>
			{/* <div className='list'>
				<h4 style={{color: primary_color}}>{title[0]} 
					<button onClick={ () => goodUp(good+1) } className='btn_good'> 따봉👍 </button>{good} 
					<button onClick={ () => {
						let titleCopy = [...title];
						titleCopy[0] = '여자 코트 추천';
						titleChange(titleCopy);
					}} className='btn_change'> 이거 누르면 변함</button>
					<button onClick={ () => {
						let titleCopy02 = [...title];
						titleCopy02.sort(function(a,b){
							if (a < b) {
								return 1
							} else {
								return -1
							}
						});
						titleChange(titleCopy02)
					}} className='btn_sort'>가나다 정렬 버튼</button>
				</h4>
				<p>{month}월 2일 발행</p>
			</div>
			<div className='list'>
				<h4 onClick={ () => {
					// setModal(!modal);
					// if (modal === true) {
					// 	setModal(false)
					// } else {
					// 	setModal(true)
					// }
					modal === true ? setModal(false) : setModal(true)
				}}>{title[1]}</h4>
				<p>{month}월 {day}일 발행</p>
			</div>
			<div className='list'>
				<h4>{title[2]}</h4>
				<p>{month}월 {day}일 발행</p>
			</div> */}

			<div>
				{
					title.map(function(a, i){
						return (
							<div className='list'>
								<h4>{a}</h4>
								<p>2월 18일 발행</p>
								<button onClick={
									() => {
										// goodUp(good + 1)
										let goodCopy = [...good];
										goodCopy[i] = goodCopy[i] + 1
										goodUp(goodCopy);
									}
								}>따봉{good[i]}</button>
							</div>
						)
					})
				}
			</div>

			<h4 style={ {color:primary_color, fontSize : '20px'} }>{post}</h4>
			{
				modal == true ? <Modal/> : null
			}
			
			<div>
				{
					[1,2,3].map(function(){
						return ( <div>안녕</div>)
					})
				}
			</div>
		</div>
	)
}

function Modal(){
	return (
		<>
			<div className='modal'>
				<h4>ReactBlog<br />로그인을 해주세요!</h4>
				<p>로그인이 처음이라면 알아서 잘 해보세요~</p>
				<div className='id' id='id'>
					아이디 : <input type="text" />
				</div>
				<div className='password' id='inputPassword'>
					비밀번호 : <input type="password" />
				</div>
				<div className='btnBox'>
					<button>회원 가입</button>
					<button>아이디 찾기</button>
					<button>비밀번호 찾기</button>
					<button>로그인 하기</button>
				</div>
			</div>
			<div></div>
		</>
	)	
}

export default App
