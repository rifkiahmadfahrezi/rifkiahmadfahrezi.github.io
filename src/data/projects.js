export async function getProjects(callback){
  try{
    // const response = await fetch(`https://api.github.com/users/rifkiahmadfahrezi/repos`)
    // const result = await response.json()

    // const data = []
    // result.forEach(d => {
    //   data.push({
    //     id:d.id,
    //     projectName: d.name,
    //     link: d.html_url,
    //     description: d.description,
    //     image: null,
    //     lastPush: d.pushed_at,
    //     languange: d.language
    //   })
    // })

    const data = [
      {
          "id": 355375194,
          "projectName": "aplikasi-spp",
          "link": "https://github.com/rifkiahmadfahrezi/aplikasi-spp",
          "description": "Aplikasi pembayaran SPP, dibuat menggunakan PHP (native), SCSS dan bootstrap",
          "image": null,
          "lastPush": "2021-04-22T00:53:34Z",
          "languange": "PHP"
      },
      {
          "id": 304878043,
          "projectName": "couvid",
          "link": "https://github.com/rifkiahmadfahrezi/couvid",
          "description": "Website informasi korban COVID-19 sederhana, dibuat menggunakan HTML,CSS,JS (vanilla) dan API dari mathdroid",
          "image": null,
          "lastPush": "2021-08-29T14:11:20Z",
          "languange": "HTML"
      },
      {
          "id": 732028261,
          "projectName": "e-sheba-landing-page",
          "link": "https://github.com/rifkiahmadfahrezi/e-sheba-landing-page",
          "description": "practice slicing design from figma",
          "image": null,
          "lastPush": "2023-12-20T07:10:16Z",
          "languange": "ReactJS"
      },
      {
          "id": 399837797,
          "projectName": "fylo-landing-page",
          "link": "https://github.com/rifkiahmadfahrezi/fylo-landing-page",
          "description": "Simple landing page build with svelte js",
          "image": null,
          "lastPush": "2021-08-26T09:40:27Z",
          "languange": "Svelte"
      },
      {
          "id": 704927912,
          "projectName": "loopstudios-landing-page",
          "link": "https://github.com/rifkiahmadfahrezi/loopstudios-landing-page",
          "description": "loopstudios landing page challenge from frontendmentor.io, created with react and tailwind",
          "image": null,
          "lastPush": "2023-10-18T14:45:11Z",
          "languange": "ReactJS"
      },
      {
          "id": 374260460,
          "projectName": "number-to-text",
          "link": "https://github.com/rifkiahmadfahrezi/number-to-text",
          "description": "number to text converter 123 = one hundred twenty three",
          "image": null,
          "lastPush": "2021-07-08T23:32:16Z",
          "languange": "JavaScript"
      },
      {
          "id": 733032549,
          "projectName": "react-CRUD",
          "link": "https://github.com/rifkiahmadfahrezi/react-CRUD",
          "description": "Simple React CRUD with fakestore API",
          "image": null,
          "lastPush": "2023-12-18T13:22:57Z",
          "languange": "ReactJS"
      },
      {
          "id": 397132918,
          "projectName": "rifkiahmadfahrezi.github.io",
          "link": "https://github.com/rifkiahmadfahrezi/rifkiahmadfahrezi.github.io",
          "description": "My simple portfolio website, build with bootstrap 5 and GSAP",
          "image": null,
          "lastPush": "2023-10-06T16:21:34Z",
          "languange": "HTML"
      },
      {
          "id": 386643780,
          "projectName": "simple-blog",
          "link": "https://github.com/rifkiahmadfahrezi/simple-blog",
          "description": "simple blog build with codeigniter 3",
          "image": null,
          "lastPush": "2021-08-01T08:00:14Z",
          "languange": "PHP"
      },
      {
          "id": 713293867,
          "projectName": "simple-store",
          "link": "https://github.com/rifkiahmadfahrezi/simple-store",
          "description": "simple online store with API, created with react and tailwind",
          "image": null,
          "lastPush": "2023-12-18T13:58:34Z",
          "languange": "ReactJS"
      },
      {
          "id": 382760582,
          "projectName": "sunnyside-landing-page",
          "link": "https://github.com/rifkiahmadfahrezi/sunnyside-landing-page",
          "description": null,
          "image": null,
          "lastPush": "2023-09-14T06:08:23Z",
          "languange": "SCSS"
      },
      {
          "id": 454402624,
          "projectName": "wakana",
          "link": "https://github.com/rifkiahmadfahrezi/wakana",
          "description": "Simple word converter to japanese word",
          "image": null,
          "lastPush": "2022-02-05T03:55:31Z",
          "languange": "HTML"
      }
  ]

    callback(true, data.sort())
  }catch(error){
    callback(false,error)
    console.error(error)
  }
}