import React, { lazy, Suspense } from 'react'
import bgAgenda from '../../Assets/img/Vectoragenda-logo.svg'
import bgPanduan from '../../Assets/img/Vectorpanduan-logo.svg'
import bgPenugasan from '../../Assets/img/VectorPenugasan.svg'
import './AgendaPenugasan.css'

const Card = lazy(() => import('../../Components/Card/Card'))

const bgEvent = (e) => (<div class="agenda-bg-wrapper position-absolute">
    <img src={e} alt="Illustarasi Event" loading="lazy" className="element-bg" />
</div>)

function AgendaPenugasan() {
    document.title = "MPKMB IPB 58 | Agenda dan Penugasan";
    const contentAgendaPenugasan = [
        {
            directTo: '/AgendaPenugasan/Agenda',
            title: "Agenda",
            bgColors: "bg-blue",
            bgImages: bgEvent(bgAgenda)
        },
        {
            directTo: '/',
            title: "Panduan",
            bgColors: "bg-red",
            bgImages: bgEvent(bgPanduan)
        },
        {
            directTo: '/',
            title: "Penugasan",
            bgColors: "bg-orange",
            bgImages: bgEvent(bgPenugasan)
        }
    ]
    return (
        <section className="position-relative z-index-3 py-5">
            <div class="container pt-5">
                <div className="row justify-content-center">
                    <h2 className="fw-bold text-center text-blue">Agenda dan Penugasan</h2>
                </div>
                <div class="row mt-3">
                    <Suspense fallback={<h1>Loading ...</h1>}>
                        {
                            contentAgendaPenugasan.map(e =>
                                <div class="col-lg-4 mt-3 mt-lg-0">
                                    <Card
                                        directTo={e.directTo}
                                        title={e.title}
                                        color={e.bgColors}
                                        background={e.bgImages}
                                        customSize='card-agenda-size'
                                    />
                                </div>
                            )
                        }
                    </Suspense>
                </div>
            </div>
        </section>

    )
}

export default AgendaPenugasan
