import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './index.module.css'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client'
import Translate, { translate } from '@docusaurus/Translate'

// See translations for label and description

function Cards() {
  const cards = [
    {
      label: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }),
      link: '/',
      isDoc: true,
      linkText: translate({ message: 'Lorem ipsum' }),
      imageUrl: 'img/index/illustrations/brownfield.svg',
    },
    {
      label: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }),
      link: '/',
      isDoc: true,
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/security.svg',
    },
    {
      label: translate({ message: 'Lorem ipsum ' }),
      description: translate({
        message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }),
      link: '/',
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/floss.svg',
    },
    {
      label: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }),
      link: '/',
      isDoc: true,
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/box.svg',
    },
  ]

  const latestVersion = useLatestVersion()

  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (
        <div className={classNames(styles.card, 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.label}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            <Link
              className={'button button--primary'}
              href={(card.isDoc ? latestVersion.path : '') + card.link}
            >
              {card.linkText}
            </Link>
          </div>
          <div className={classNames(styles.cardSide, styles.cardImage)}>
            <img src={card.imageUrl} />
          </div>
        </div>
      ))}
    </section>
  )
}

function Features() {
  const items = [
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'box-seam',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'cloud-arrow-down',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'puzzle',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'safe',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'menu-app',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'github',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'app-indicator',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'code-square',
    },
    {
      title: translate({ message: 'Lorem ipsum' }),
      description: translate({
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      }),
      icon: 'folder2-open',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return (
          <FeatureRoadmapEntry
            {...item}
            key={index}
            cname={styles.featureIcon}
          />
        )
      })}
    </div>
  )
}

function FeatureRoadmapEntry(props) {
  return (
    <div className={styles.featureRoadmapEntry}>
      <div className={styles.featureRoadmapIconContainer}>
        <i
          className={classNames(
            styles.featureRoadmapIcon,
            'bi',
            `bi-${props.icon}`,
            props.cname
          )}
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

function DynamicHeaderImage() {
  const { colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Pre-fetch images
  useEffect(() => {
    const images = []

    const darkViaLogo = (new Image().src = 'img/via.png')
    images.push(darkViaLogo)

    const lightViaLogo = (new Image().src = 'img/via.png')
    images.push(lightViaLogo)
  }, [])

  // // Set dark mode correctly
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark')
  }, [colorMode])

  return (
    <img
      src={
        isDarkMode
          ? '/img/via.png'
          : '/img/via.png'
      }
    />
  )
}

export default function App() {
  const context = useDocusaurusContext()
  const latestVersion = useLatestVersion()

  return (
    <Layout
      title={`Home`}
      description={translate({
        message:
          'The Via Service is a Discord ...',
      })}
    >
      <header className={classNames('hero', styles.hero)}>
        <div className={classNames(styles.heroBefore)}>
          <div className={classNames(styles.loopsContainer)}>
            <img
              className={classNames(styles.heroLoops)}
              src="/img/index/blue_loops.svg"
            />
          </div>
        </div>
        <div className={classNames(styles.heroContainer)}>
          <p className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
            <Translate>Announcing the release of</Translate>
          </p>
          <span className={classNames(styles.heroImage)}>
            <DynamicHeaderImage />
          </span>
          <div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
            <Translate>
              A Discord bot that allows you to create and manage your own custom commands. Documentation and stuff here
            </Translate>
          </div>

          

          <Link
            className={classNames('button button--secondary button--lg')}
            to={latestVersion.path + '/'}
          >
            <Translate>Quick Start</Translate>
          </Link>
        </div>
        <div className={classNames(styles.heroAfter)}>
          <div className={classNames(styles.loopsContainer)}>
            <img
              className={classNames(styles.heroLoops)}
              src="/img/index/orange_loops.svg"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="container">
          <div className={classNames(styles.row)}>
            <Cards />
          </div>
        </section>

        <section className="hero">
          <div className="container">
            <h1 className={styles.h1}>Features</h1>
            <div className={styles.row}>
              <Features />
            </div>

            <div className={styles.spacer} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
