import React from 'react';
import Input from './Input';
import Select from './Select';
import HeaderButton from './HeaderButton';

function Header() {
  return(
    <nav className='menu'>
      <ul className='menu__item'><div className='menu__menu-btn'></div></ul>
      <ul className='menu__item'>
        <div className='menu__btn-wrapper'>
          <HeaderButton>Photo</HeaderButton>
          <HeaderButton>video</HeaderButton>
        </div>
      </ul>
      <ul className='menu__item'><Input placeholder='Search' /></ul>
      <ul className='menu__item'><Select><option>resolution</option></Select></ul>
      <ul className='menu__item'><span style={{color: 'grey', border: '1px solid grey'}}>fps:</span><input style={{maxWidth: 30, backgroundColor: 'black', border: '1px solid grey'}}/></ul>
      <ul className='menu__item'><Select><option>type</option></Select></ul>
      <ul className='menu__item'><Select><option>sort</option></Select></ul>
    </nav>
  )
}

export default Header