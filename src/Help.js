// eslint-disable-next-line
import './App.css';
import "./Help.css";
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Help extends React.Component{
  render() {
    return (
        <div className='explain'>
            <h1>게임 설명</h1>
            <h5>1-50까지의 숫자를 빠르게 클릭하세요!</h5>
            <p>시작 버튼을 누르면 동시에 타이머가 흘러갑니다.</p>
            <p>50까지 숫자를 모두 다 클릭하면 타이머가 멈추가 게임이 종료됩니다.</p>
            <p>친구들과 함께 경쟁해보세요!!</p>
        </div>
    );
  }
}
