import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://ficn.exchange">
        <TranslatedText translationId={2}>About</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://finance.cn.com/#/swap" className="active">
        <TranslatedText translationId={8}>FinanceSwap</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://financeswap.info/">Analytics</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/farms">
        <TranslatedText translationId={14}>Farm with Pancake</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://pancakeswap.finance/ifo">
        <TranslatedText translationId={14}>IFO with Pancake</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
