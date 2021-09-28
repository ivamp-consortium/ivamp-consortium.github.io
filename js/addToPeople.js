/**
 * Just to add images to people
 */

// placeholder
const ph = "Placeholder-Image.jpg"

const imagesPeople = [
    {
        src1: "Reitzel-Adam_UNCC-AsscProf.JPG",
        src2: "Reitzel_Nematostella_adult-eggs.jpg",
        href: "https://pages.uncc.edu/adam-reitzel/",
        name: "Adam Reitzel",
        office: "Professor",
        at: "University of North Carolina at Charlotte",
        address: "areitze2[at]uncc.edu"
    },
    {
        src1: "Walker-AndrewA_UQ-Postdoc.jpg",
        src2: "Walker_Lethocerus-distinctifemur.jpg",
        href: "https://imb.uq.edu.au/bugs-and-drugs",
        name: "Andrew Walker",
        office: "Postdoctoral Fellow",
        at: "Institute for Molecular Bioscience",
        address: "a.walker[at]imb.uq.edu.au"
    },
    {
        src1: "Saviola-Anthony_SRI-Postdoc.JPG",
        src2: "Saviola_Crotalus-simus.jpg",
        href: "https://som.ucdenver.edu/Profiles/Faculty/Profile/35430",
        name: "Anthony Saviola",
        office: "Staff Scientist",
        at: "University of Colorado",
        address: "asaviola[at]scripps.edu"
    },
    {
        src1: "Nobile-Clarissa_UCM-AsscProf.jpeg",
        src2: "Nobile_Candida-albicans.jpg",
        href: "http://faculty.ucmerced.edu/nobilelab/",
        name: "Clarissa Nobile",
        office: "Associate Professor",
        at: "UC Merced",
        address: "cnobile[at]ucmerced.edu"
    },
    {
        src1: "Harms-Chelsea_IslaMar-Researcher-PhD.jpg",
        src2: "Harms_Pterois-volitans_Duane-Sabria.JPG",
        href: "https://www.islamarexp.com/",
        name: "Chelsea Harms-Tuohy",
        office: "Independent Researcher",
        at: "Isla Mar Research Expeditions",
        address: "chelsea.harms[at]upr.edu"
    },
    {
        src1: "Petras-Daniel_UCSD-Postdoc.jpg",
        src2: "Petras_Placeholder_Vipera-kaznakovi.jpg",
        href: "https://dorresteinlab.ucsd.edu/",
        name: "Daniel Petras",
        office: "Postdoctoral Scholar",
        at: "UC San Diego",
        address: "functionalmetabolomics[at]gmail.com"
    },
    {
        src1: "Fox-Eduardo_IBCCF-Postdoc.JPG",
        src2: "Fox-Eduardo_Formicidae.jpg",
        href: "https://publons.com/researcher/431885/eduardo-goncalves-paterson-fox/",
        name: "Eduardo Fox",
        office: "Postdoctoral Fellow",
        at: "Instituto de Biofísica Carlos Chagas Filho",
        address: "ofoxofox[at]gmail.com"
    },
    {
        src1: "Rodr%C3%ADguez-Rom%C3%A1n-Eduardo_IVIC-PhDStudent.JPG",
        src2: ph,
        href: "http://ivic.academia.edu/EduardoRodr%C3%ADguezRom%C3%A1n",
        name: "Eduardo Rodríguez-Román",
        office: "PhD Student",
        at: "Instituto Venezolano de Investigaciones Científicas",
        address: "erodriguezroman[at]gmail.com"
    },
    {
        src1: "Stiers-Erin_Clemson-GradStudent.png",
        src2: "Stiers-Snakes.jpg",
        href: "https://www.parkinsonlab.com/people",
        name: "Erin Stiers",
        office: "Graduate Student",
        at: "Clemson University",
        address: "estiers[at]g.clemson.edu"
    },
    {
        src1: ph,
        src2: ph,
        href: "https://twitter.com/jp_dunbar?lang=en",
        name: "John Dunbar",
        office: "PhD Student",
        at: "National University of Ireland Galaway",
        address: "j.dunbar2[at]nuigalway.ie"
    },
    {
        src1: "Puschhof-Jens_HI-Postdoc.jpg",
        src2: ph,
        href: "https://www.hubrecht.eu/research-groups/clevers-group/",
        name: "Jens Puschhof",
        office: "Postdoctoral Fellow",
        at: "Hubrecht Institute",
        address: "j.puschhof[at]hubrecht.eu"
    },
    {
        src1: "Holmes-Iris_UM-PhDStudent.JPG",
        src2: "Holmes_Squamate-Snake.jpg",
        href: "http://www-personal.umich.edu/~ardr/people/current-lab-members.html",
        name: "Iris Holmes",
        office: "PhD Student",
        at: "University of Michigan",
        address: "iholmes[at]umich.edu"
    },
    {
        src1: "Macrander-Jason_FSC-AsstProf.jpeg",
        src2: "Macrander_Nematostella-vectensis.jpg",
        href: "https://macrander.wordpress.com/",
        name: "Jason Macrander",
        office: "Assistant Professor",
        at: "Florida Southern College",
        address: "jmacrander[at]flsouthern.edu"
    },
    {
        src1: "Yeager-Justin_UDLA_Researcher.jpg",
        src2: "Yeager_Dendrobates.jpg",
        href: "http://investigacion.udla.edu.ec/udla_teams/justin-yeager/",
        name: "Justin Yeager",
        office: "Researcher",
        at: "Universidad de las Américas, Quito, Ecuador",
        address: "yeagerjd[at]gmail.com"
    },
    {
        src1: "Sozanski-Kyle_OSU-PhDStudent.jpg",
        src2: "Adams_Megalomyrmex.jpg",
        href: "https://eeob.osu.edu/people/sozanski.1",
        name: "Kyle Sozanski",
        office: "PhD Student",
        at: "Ohio State University",
        address: "sozanski.1[at]buckeyemail.osu.edu"
    },
    {
        src1: "Keiser-Nick_UFAsstProf.jpg",
        src2: "Keiser_Stegodyphus.png",
        href: "www.keiserlab.com",
        name: "Nick Keiser",
        office: "Assistant Professor",
        at: "University of Florida",
        address: "ckeiser[at]ufl.edu"
    },
    {
        src1: "Cerda-Peter_UM-PhDStudent.png",
        src2: "Cerda_Conus.jpeg",
        href: "https://lsa.umich.edu/eeb/people/graduate-students/pacerda.html",
        name: "Peter Cerda",
        office: "PhD Student",
        at: "University of Michigan",
        address: "pacerda[at]umich.edu"
    },
    {
        src1: "Adams-Rachelle_OSU-AsstProf.jpg",
        src2: "Adams_Megalomyrmex.jpg",
        href: "https://megalomyrmex.osu.edu/",
        name: "Rachelle M. M. Adams",
        office: "Assistant Professor",
        at: "Ohio State University",
        address: "adams.1970[at]osu.edu"
    },
    {
        src1: "Ul-Hasan-Sabah_UCM-Postdoc.jpg",
        src2: "UlHasan_Californiconus-californicus.JPG",
        href: "http://sulab.org/",
        name: "Sabah Ul-Hasan",
        office: "Postdoctoral Fellow",
        at: "The Scripps Research Institute",
        address: "bysabahulhasan[at]gmail.com"
    },
    {
        src1: "Nixon-Samantha_IMB-PhDCandidate.png",
        src2: "King_Heteroscodra-maculata.jpg",
        href: "https://imb.uq.edu.au/samantha-nixon/",
        name: "Samantha Nixon",
        office: "PhD Candidate",
        at: "Institute for Molecular Bioscience, The University of Queensland",
        address: "samantha.nixon[at]uq.net.au"
    },
    {
        src1: "Dunaj-Sara_UmassLowell-Researcher.jpg",
        src2: ph,
        href: "http://blogs.uml.edu/garb-lab/people/",
        name: "Sara Dunaj",
        office: "Researcher",
        at: "University of Massachusetts, Lowell",
        address: "Sara_Dunaj[at]student.uml.edu"
    },
    {
        src1: "Smith-Sierra_UO-PhDCandidate.jpg",
        src2: "Smith_Serpentes-WangCredit.JPG",
        href: "https://twitter.com/smith_sierra_n?lang=en",
        name: "Sierra Smith",
        office: "PhD Candidate",
        at: "University of Oklahoma",
        address: "sierrasmith[at]ou.edu"
    },
    {
        src1: "Moschos-Sterghios_NorthUni-AsscProf.png",
        src2: "Trim_Psalmopoeus-cambridgei.JPG",
        href: "https://www.northumbria.ac.uk/about-us/our-staff/m/dr,-d-,-sterghios-athanasios-moschos-frsc-fibms-fhea-mrsb/",
        name: "Sterghios Moschos",
        office: "Associate Professor",
        at: "Northumbria University",
        address: "sterghios.moschos[at]northumbria.ac.uk"
    },
    {
        src1: "Trim-Steve_Venomtech-CSO.jpg",
        src2: "Trim_Psalmopoeus-cambridgei.JPG",
        href: "https://venomtech.co.uk/",
        name: "Steven Trim",
        office: "Managing Director",
        at: "Venomtech Ltd UK",
        address: "s.trim[at]venomtech.co.uk"
    },
    {
        src1: "Herzig-Volker_UQ-Researcher.jpeg",
        src2: "Herzig_Salticid-UndheimCredit.jpg",
        href: "https://www.usc.edu.au/staff/associate-professor-volker-herzig",
        name: "Volker Herzig",
        office: "Associate Professor",
        at: "University of the Sunshine Coast",
        address: "vherzig[at]usc.edu.au"
    },
    {
        src1: "Colston-Tim_FSU-Postdoc.jpg",
        src2: "Colston_Micrurus-fulvius.jpg",
        href: "https://drokyta.com/",
        name: "Timothy J. Colston",
        office: "Postdoctoral Fellow",
        at: "Florida State University",
        address: "tim[at]maddreptiles.com"
    },
    {
        src1: "Moran-Yehu_HUJ-Prof.JPG",
        src2: "Moran_Nematostella-vectensis.jpg",
        href: "https://www.yehumoran.com/",
        name: "Yehu Moran",
        office: "Professor",
        at: "Hebrew University of Jerusalem",
        address: "yehu.moran[at]mail.huji.ac.il"
    }
]

let people_row = ""

function loadPeople(){
    for (let i=0; i < imagesPeople.length; i+=1){
        people_row += `
            <div class="row">
                <div class="columns">
                    <div class="column">
                        <img src="./images/${imagesPeople[i].src1}"  width="300" height="300">
                    </div>
                    <div class="column">
                        <img src="./images/${imagesPeople[i].src2}"  width="300" height="300">
                    </div>
                </div>
                <p> ${imagesPeople[i].name} <br>
                ${imagesPeople[i].office}, <a href="${imagesPeople[i].href}"> ${imagesPeople[i].at} </a> <br>
                ${imagesPeople[i].address}</p>
            </div>
        `
    }

    $('#people').append(people_row)
}
