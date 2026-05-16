import ContactCard from "../components/ContactCard.tsx";
import styles from "./Contact.module.css";
import SectionStyles from "./SectionStyles.module.css"

export default function Contact() {
  return (
    <section className={`bg-bg d-flex flex-col align-center justify-start ${SectionStyles.main}`}>
      <div className="d-flex flex-col align-center justify-center g1">
        <h1 className="color-primary m0">Contact Me</h1>
        <h3 className="color-text m0 header-wrap text-center">Don't worry I won't bite 😛</h3>
      </div>
      <div className={`g2 ${styles.container}`}>
        <ContactCard
          title="Email"
          description="soupcat.py@gmail.com"
          link="mailto:soupcat.py@gmail.com"
          icon={<>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"/>
            <path d="M3 7l9 6l9 -6"/>
          </>}
        />
        <ContactCard
          title="Github"
          description="Soup Cat"
          link="https://github.com/SoupCat-Py"
          icon={<>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path
              d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
          </>}
        />
        <ContactCard
          title="Discord"
          description="soupcat.tsx"
          link="https://discord.com/users/974108638589386823"
          icon={<>
            <path d="M18.894 4.344A17.4 17.4 0 0 0 14.532 3c-.192.33-.406.779-.555 1.13a16.7 16.7 0 0 0-4.833 0c-.15-.351-.373-.8-.555-1.13a17.2 17.2 0 0 0-4.363 1.344C1.463 8.419.716 12.397 1.09 16.323A17.8 17.8 0 0 0 6.435 19a13 13 0 0 0 1.14-1.845 11 11 0 0 1-1.802-.864 7 7 0 0 0 .438-.342c3.477 1.59 7.243 1.59 10.678 0 .15.118.288.235.437.342a11 11 0 0 1-1.802.864A13 13 0 0 0 16.665 19a17.7 17.7 0 0 0 5.345-2.677c.459-4.544-.726-8.491-3.116-11.979"/>
            <ellipse fill="CurrentColor" cx="8.25" cy="11.5" rx="0.7" ry="1.1"/>
            <ellipse fill="CurrentColor" cx="14.75" cy="11.5" rx="0.7" ry="1.1"/>
          </>}
        />
        <ContactCard
          title="Bluesky"
          description="soupdev@bsky.social"
          link="https://bsky.app/profile/soupdev@bsky.social"
          icon={<>
            <path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856"/>
          </>}
        />
      </div>
    </section>
  )
}
