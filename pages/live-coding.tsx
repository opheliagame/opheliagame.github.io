import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

const LiveCoding = () => {
  return (
    <section>
      <Layout>
        <Container>
          <Header />

          <section className="max-w-2xl mx-auto">
            <ul className="list-disc my-12 underline underline-offset-2 decoration-[#3066BE]">
              <li>
                <a href="https://www.youtube.com/live/bViDWh7mOnA?si=6YhG9wdNCdu2uoKx&t=4076">Algorave India: Third Anniversary Party</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=7RUlqoI1khY">Solstice Stream December 2023 - Algorave India Open Jam - 2023-12-21 11:00</a>
              </li>
              <li>
                <a href="https://youtu.be/x1y15-Od8Jw?si=rERiYS50Ozc9p3fn">Estuary birthday stream with @khoparzi 🥳❤️</a>
              </li>
              <li>
                <a href="https://youtu.be/vN8mWzEHzEA?si=bj1QftTxmArP62zQ">Estuary jam session with @beatnyk</a>
              </li>
              <li>
                <a href="https://www.youtube.com/live/9jNpkXMjk5w?si=Q8oZXMyRs7vYoM9z">Livecoding performance - Ophelia.Game, Beatnyk, Okbaj and Khoparzi at Dreamy Place - 23 Oct, 2023</a>
              </li>
            </ul>

            <h2 className="text-2xl my-2">In Person</h2>
            <ul className="list-disc">
              <li>
                Walkin Studios 2022/10/10
              </li>
              <li>
                Noiseoiseoise 2022/12/16
              </li>
              <li>
                Tokyo Tech Meetup 2023/04/25
              </li>
              <li>
                Noiseoiseoise 2023/12/24
              </li>
            </ul>
          </section>

        </Container>
      </Layout>
    </section>


  )
}

export default LiveCoding