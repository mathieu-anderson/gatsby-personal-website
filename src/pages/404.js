import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Box from "../components/Box"
import { MoodContext, MoodProvider } from "../hooks/useMoodContext"
import {
  ThemingArticle,
  TypesArticle,
  ReviewArticle,
  LocalizationArticle,
} from "../components/BoxProjects"

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max))
}

const moodsNotFound = {
  enthusiastic: {
    moodClassName: "enthusiastic",
    moodText: "Wow, there's nothing here!",
  },
  curious: {
    moodClassName: "curious",
    moodText: "What were you looking for?",
  },
  openminded: {
    moodClassName: "openminded",
    moodText: "Everyone makes typos",
  },
}

const initialMoodNotFound = {
  moodClassName: "",
  moodText: "Page not found",
}
const moodsArticle = {
  enthusiastic: {
    moodClassName: "enthusiastic",
    moodText: "Interesting!",
  },
  curious: {
    moodClassName: "curious",
    moodText: "Ever wondered about this?",
  },
  openminded: {
    moodClassName: "openminded",
    moodText: "Some thoughts to share",
  },
}

const initialMoodArticle = {
  moodClassName: "",
  moodText: "Random article",
}

const articles = [
  ThemingArticle,
  LocalizationArticle,
  TypesArticle,
  ReviewArticle,
]

const NotFoundPage = () => {
  const { mood } = React.useContext(MoodContext)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Box
        initialMood={initialMoodNotFound}
        moods={moodsNotFound}
        currentMood={mood}
      >
        You have reached a page that does not exist.
      </Box>
      <Box
        initialMood={initialMoodArticle}
        moods={moodsArticle}
        currentMood={mood}
      >
        {articles[getRandomInt(3)]}
      </Box>
    </Layout>
  )
}

const WrappedNotFoundPage = () => (
  <MoodProvider>
    <NotFoundPage />
  </MoodProvider>
)

export default WrappedNotFoundPage
