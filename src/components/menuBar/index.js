import React, { useState, useEffect } from 'react'
import * as s from './styles'
import getThemeColor from '../../utils/getThemeColor'

const MenuBar = () => {
  const [theme, setTheme] = useState('dark')
  const [display, setDisplay] = useState('list')
  const toggledThemeColor = theme === 'dark' ? 'light' : 'dark'
  const toggledDisplay = display === 'list' ? 'grid' : 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)
    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <s.MenuBarContainer>
      <s.MenuBarWrapper>
        <s.MenuBarLink
          to="/"
          title="home"
          cover
          bg={getThemeColor()}
          direction="left"
          duration={0.6}
        >
          <s.MenuBarItem>
            <s.HomeIcon />
          </s.MenuBarItem>
        </s.MenuBarLink>
        <s.MenuBarLink
          to="/search/"
          title="search"
          cover
          bg={getThemeColor()}
          direction="down"
          duration={0.6}
        >
          <s.MenuBarItem>
            <s.SearchIcon />
          </s.MenuBarItem>
        </s.MenuBarLink>
      </s.MenuBarWrapper>

      <s.MenuBarWrapper>
        <s.MenuBarItem
          title="theme"
          onClick={() => {
            window.__setPreferredTheme(toggledThemeColor)
          }}
        >
          {theme === 'dark' ? <s.SunIcon /> : <s.MoonIcon />}
        </s.MenuBarItem>
        <s.MenuBarItem
          title="grid"
          onClick={() => {
            window.__setPreferredDisplay(toggledDisplay)
          }}
          className="display"
        >
          {display === 'list' ? <s.GridIcon /> : <s.ListIcon />}
        </s.MenuBarItem>
        <s.MenuBarItem title="top">
          <s.ArrowUpIcon />
        </s.MenuBarItem>
      </s.MenuBarWrapper>
    </s.MenuBarContainer>
  )
}

export default MenuBar
