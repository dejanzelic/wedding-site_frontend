export default {
    ourStory: [
        {
            image: "1.png",
            content: {
                "en": "In the wedding planning system, excitedness based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Wedding Unit. These are their stories.",
                "sr": "Poljubac je divan trik dizajniran od strane prirode da zaustavi govor kada reči postanu suvišne"
            }
        },
        {
            image: "2.png",
            content: {
                "en": "Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.",
                "sr": "Sami smo na rođenju, sami smo tokom života i umiremo sami. Jedino uz pomoć ljubavi i prijateljstva možemo da stvorimo iluziju, bar na momenat da nismo sami."
            }
        }
    ],
    rsvp: {
        alertMessage: {
            "en": "In the wedding planning system, excitedness based offenses are considered especially heinous. In New York City, the dedicated detectives who investigate these vicious felonies are members of an elite squad known as the Special Wedding Unit. These are their stories.",
            "sr": "Poljubac je divan trik dizajniran od strane prirode da zaustavi govor kada reči postanu suvišne"
        }
    },
    dynamicHomepage: [
        {
          components: [
            { name: "Hero" },
            { name: "Gallery" },
          ],
          start: "Jan 1 1900",
          end: "Nov 09 2023",
        },
                {
          components: [
            { name: "Hero" },
            {
              name: "Custom",
              props: {
                title: {
                    "en": "Detials",
                    "sr": "Detalji"
                },
                content: {
                    "en": "The wedding will be outdoors, make sure you dress accordingly.",
                    "sr": "Venčanje će se održati u kamenitom i peščanom području."
                }
              },
            },
          ],
          start: "Nov 09 2023",
          end: "Nov 09 2025",
        },
      ],
}