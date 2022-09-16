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
      label: translate({ message: 'Text Active Roles' }),
      description: translate({
        message:
        "Automatically award a special role to members who are actively texting in your server. This role will be automatically removed when they stop texting.",
      }),
      link: '/active-roles/text/',
      isDoc: true,
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/brownfield.svg',
    },
    {
      label: translate({ message: 'Voice Active Roles' }),
      description: translate({
        message:
        'Automatically award a special role to members in your server\'s voice channels. This role will be automatically removed when they leave the voice channels.'
      }),
      link: '/active-roles/voice/',
      isDoc: true,
      linkText: translate({ message: 'Learn More' }),
      imageUrl: 'img/index/illustrations/security.svg',
    },
    {
      label: translate({ message: 'Custom Status Loyal Roles' }),
      description: translate({
        message:
        'Automatically award a special role to members with a custom status that supports your server (For example: "Join discord.gg/your-server-name"). The role is removed automatically when the custom status is changed.'
      }),
      link: '/loyal-roles/',
      linkText: translate({ message: 'Learn More' }),
      isDoc: true,
      imageUrl: 'img/index/illustrations/floss.svg',
    },
    {
      label: translate({ message: 'Anonymous Confessions and Replies' }),
      description: translate({
        message:
        'Allow your members to reveal their secrets and feelings without revealing their identity! This feature works best in friendships and hangout servers.'
      }),
      link: '/confessions/',
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
      title: translate({ message: 'Fluffy | Founder - ChillCm (1K)' }),
      description: translate({
        message: '(Coming soon. Join support server to add your review)',
      }),
      icon: 'box-seam',
    },
    {
      title: translate({ message: 'Arav | Founder - Wholesome Posting (20K)' }),
      description: translate({
        message: '(Coming soon. Join support server to add your review)',
      }),
      icon: 'cloud-arrow-down',
    },
    {
      title: translate({ message: 'Adrian | Founder - Kimetsu (1K)' }),
      description: translate({
        message: 'I liked the bot. The active and loyal roles works very well',
      }),
      icon: 'puzzle',
    },
    /*
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
    }, */
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

    const darkViaLogo = (new Image().src = 'img/via_dark.png')
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
          : '/img/via_dark.png'
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
            <Translate>A new way to make your discord server great again</Translate>
          </p>
          <span className={classNames(styles.heroImage)}>
            <DynamicHeaderImage />
          </span>
          <div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
            <Translate>
              Active texting roles, voice roles, custom status loyal roles, anonymous confessions and more!
            </Translate>
          </div>

          

          <Link
            className={classNames('button button--secondary button--lg')}
            to={latestVersion.path + '/'}
          >
            <Translate>Get Started</Translate>
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
            <h1 className={styles.h1}>What Community Leaders Feel About Via Bot</h1>
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
