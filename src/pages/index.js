import React from "react"
import {
  TypeScriptIcon,
  ReactIcon,
  ReduxIcon,
  WebpackIcon,
  GitIcon,
  DockerIcon,
  JavaScriptIcon,
  SassIcon,
  NodeIcon,
  CssIcon,
} from "../components/Icons"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Box from "../components/Box"
import Pill from "../components/Pill"
import Job from "../components/Job"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Mathieu Anderson is a web dev" />
      <div className="layout-subgrid-left">
        <Box className="Section-1" heading="Nice to meet you">
          <p>
            I am a <b>front-end</b> specialist. I love being part of
            cross-functional teams and being the <b>logical glue</b> between the
            back-end devs and the designers.
          </p>
          <p>
            My favourite tool is currently <b>React</b>, but I love anything
            that allows to build UIs in a <b>declarative way</b>. And I'm always
            eager to adopt whatever is consensual in the team!
          </p>
          <p>
            I come from a <b>fullstack background</b>. I am familiar with
            back-end tech (Node, Go, SQL databases), and I'm delighted to dive
            into it when it is required!
          </p>
        </Box>
        <Box className="Section-3" heading="Teams I worked with">
          <Job
            job={{
              link: (
                <a title="Talon.one" href="https://talon.one/">
                  Talon.One
                </a>
              ),
              dates: "January 2019 - Now",
              role: "Front-end developer",
            }}
            techList={[
              { name: "TypeScript", icon: <TypeScriptIcon /> },
              { name: "React", icon: <ReactIcon /> },
              { name: "Redux", icon: <ReduxIcon /> },
              { name: "CSS", icon: <CssIcon /> },
              { name: "Webpack", icon: <WebpackIcon /> },
              // { name: "Go", icon: <GoIcon /> },
              { name: "Git", icon: <GitIcon /> },
              { name: "Docker", icon: <DockerIcon /> },
            ]}
          >
            <ul>
              <li>
                A dynamic growth startup selling a b2b promotion engine solution
              </li>
              <li>
                Sophisticated tech around Talang, a DSL to build and evaluate
                user-defined rules safely and fast
              </li>
              <li>
                Building front-end features in collaboration with the UX/UI team
                and the back-end team (geolocation, UI library), addressing tech
                debt, optimizing build tools and DX (cut build time in half),
                learning to mentor team members
              </li>
            </ul>
          </Job>
          <Job
            job={{
              link: (
                <a title="WooRank" href="https://www.woorank.com/">
                  WooRank
                </a>
              ),
              dates: "July 2017 - December 2018",
              role: "Full-stack developer",
            }}
            techList={[
              { name: "JavaScript", icon: <JavaScriptIcon /> },
              { name: "React", icon: <ReactIcon /> },
              { name: "Redux", icon: <ReduxIcon /> },
              { name: "Sass", icon: <SassIcon /> },
              { name: "Webpack", icon: <WebpackIcon /> },
              { name: "Node", icon: <NodeIcon /> },
              { name: "Git", icon: <GitIcon /> },
              { name: "Docker", icon: <DockerIcon /> },
            ]}
          >
            <ul>
              <li>
                A mature startup providing an SEO service to thousands of users
                daily
              </li>
              <li>
                Deeply committed to high availability and continuous integration
                / deployment through containerized micro-services, with multiple
                deployment daily
              </li>
              <li>
                Built new features from back-end to front-end (PDF generation,
                Facebook API metrics gathering, mailing service), addressed
                maintenance issues (legacy PHP codebase), participated in
                first-response effort during crisis
              </li>
            </ul>
          </Job>
        </Box>
      </div>
      <div className="layout-subgrid-right">
        <Box className="Section-2" heading="Most used tools">
          <div className="pills-container">
            <Pill
              name="JavaScript"
              icon={<JavaScriptIcon />}
              details={{
                since: "2016",
                frequency: "every day",
                like:
                  "the flexibility to be used in the front-end and the back-end, the speed and ease of development.",
              }}
            />
            <Pill
              name="TypeScript"
              icon={<TypeScriptIcon />}
              details={{
                since: "2019",
                frequency: "every day",
                like:
                  "the safety and productivity boost it brings to large and complex projects.",
              }}
            />
            <Pill
              name="React"
              icon={<ReactIcon />}
              details={{
                since: "2016",
                frequency: "every day",
                like:
                  "the composability paradigm and the continued improvements and innovation brought to the API (hooks <3)",
              }}
            />
            <Pill
              name="Redux"
              icon={<ReduxIcon />}
              details={{
                since: "2016",
                frequency: "every day",
                like:
                  "the core simplicity of the design and the power it offers (to be used wisely!)",
              }}
            />
            <Pill
              name="CSS"
              icon={<CssIcon />}
              details={{
                since: "2016",
                frequency: "every day",
                like: `the potential to create anything with enough knowledge (like ${(
                  <a href="https://youtu.be/wlfmSJIyg_E">Mario Kart</a>
                )})`,
              }}
            />
            <Pill
              name="Sass"
              icon={<SassIcon />}
              details={{
                since: "2016",
                frequency: "only in side projects",
                like:
                  "the flexibility to be used in the front-end and the back-end, the speed and ease of development",
              }}
            />
            <Pill
              name="Node"
              icon={<NodeIcon />}
              details={{
                since: "2016",
                frequency: "only in side projects",
                like:
                  "the package ecosystem around NPM and the ability to write JS / TS in the back-end for truly isomorphic apps",
              }}
            />
            <Pill
              name="Webpack"
              icon={<WebpackIcon />}
              details={{
                since: "2016",
                frequency: "every day",
                like:
                  "the amount of control it gives over a build and the excellent developer experience it enables",
              }}
            />
            <Pill
              name="Docker"
              icon={<DockerIcon />}
              details={{
                since: "2017",
                frequency: "every day (as part of the dev and CI environment)",
                like:
                  "the ability to eliminate local setup issues by spinning everything up in containers",
              }}
            />
            <Pill
              name="Git"
              icon={<GitIcon />}
              details={{
                since: "2016",
                frequency: "every day",
                like:
                  "the security, debugging and collaboration potential it offers.",
              }}
            />
          </div>
        </Box>
        <Box className="Section-4" heading="Writing and side projects">
          <p>
            I love sharing knowledge, insights and learning journeys through
            blog posts and talks!
          </p>
          <ul>
            <li>
              <a
                title="Guide: a localization toolbox with React's context API"
                href="https://itnext.io/using-reacts-context-api-to-provide-a-localization-toolbox-for-your-components-48915f04bb54"
              >
                Guide: a localization toolbox with React's context API
              </a>
            </li>
            <li>
              <a
                title="Guide: types of TypeScript typings"
                href="https://medium.com/@syllaband/types-of-typescript-typings-303539f3a57b"
              >
                Guide: types of TypeScript typings
              </a>
            </li>
            <li>
              <a
                title="A proposal for clearer code reviews"
                href="https://medium.com/@syllaband/a-proposal-for-clearer-code-review-ac3ebbcc0ec6"
              >
                Thoughts: a clearer code review process (with emojis!)
              </a>
            </li>
            <li>
              <a
                title="Guide : theming Ant Design, step by step"
                href="https://medium.com/@syllaband/theming-ant-design-a-detailed-step-by-step-basic-guide-d060bef34ec4"
              >
                Guide : theming Ant Design, step by step
              </a>
            </li>
          </ul>
          <p>
            I also love building little projects to learn new tech, or just to
            see if I can!
          </p>
          <ul>
            <li>
              <a
                title="JS Equalities as a slots machine"
                href="https://github.com/mathieu-anderson/js-equality-jackpot"
              >
                JS Equalities as a slots machine
              </a>
            </li>
            <li>
              <a
                title="Tarot drawing made simple"
                href="https://github.com/mathieu-anderson/tarot-reading"
              >
                Tarot drawing made simple
              </a>
            </li>
            <li>
              <a
                title="Is this mysterious ingredient not vegan?"
                href="https://github.com/mathieu-anderson/vegan-checker"
              >
                Is this mysterious ingredient not vegan?
              </a>
            </li>
          </ul>{" "}
        </Box>
      </div>
    </Layout>
  )
}

export default IndexPage
