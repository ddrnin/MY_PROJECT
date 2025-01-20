/* eslint-disable */ 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	let post = '강남 우동 맛집';

	let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
	let [good, setGoodUp] = useState([0, 0, 0, 0]);
	let [modal, setModal] = useState(false);
	let [modalTitle, setModalTitle] = useState(0);
	function btn_good(){
		good += 1
	}

	return (
		<div className='App'>
			<div className='black_nav'>
				<h4>ReactBlog</h4>
			</div>
			{
				title.map(function(a, i){
					return (
						<div className='list' key={i}>
							<h4 onClick={ () => {setModal(!modal), setModalTitle(i)}}>
								{title[i]}
								<span onClick={
									function(){
										let goodCopy =[...good]
										goodCopy[i] = goodCopy[i] + 1
										setGoodUp(goodCopy)
									}
								}>
								👍따봉👍
								</span>
								{good[i]}
							</h4>
							<p>2월 18일 발행</p>
						</div>
					)
				})	
			}

			<h4 style={ {color:'red', fontSize : '20px'} }>{post}</h4>
			{
				modal == true ? <Modal setModalTitle={setModalTitle} modalTitle={modalTitle} title={title}/> : null
			}
		</div>
	)
}

function Modal(props){
	return (
		<>
			<div className='modal'>
				<h4>{props.title[props.modalTitle]}</h4>
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
					<button>글수정</button>
				</div>
			</div>
			<div></div>
		</>
	)	
}

export default App
