function timeline() {
    var fetch = document.getElementById("output");
    var command = document.getElementById("input").value;
    var prefix = "$texas.history%timeline%";
    var res = ""
    switch(command) {
        case (prefix + "14000.bce"):
            res = "The first people settle in what is now Texas.";
            break;
        case (prefix + "9500.bce"):
            res = "The Clovis People settle in Texas.";
            break;
        case (prefix + "8000.bce"):
            res = "The Folsom People settle in Texas.";
            break;
        case (prefix + "6000.bce"):
            res = "The Archaic Period begins.";
            break;
        case (prefix + "3000.bce"):
            res = "The first farms are established in Texas and they grow things like corn, beans, and squash";
            break;
        case (prefix + "2500.bce"):
            res = "Pecos rock art was made by some people around this time near the present-day Pecos Region.";
            break;
        case (prefix + "100"):
            res = "In a Hueco Mountains' canyon, aincent people held ceremonies where they places offerings in a cave.";
            break;
        case (prefix + "700"):
            res = "People in Texas had learned about the bow and arrow";
            break;
        case (prefix + "800"):
            res = "The Caddo community was formed.";
            break;
        case (prefix + "1150"):
            res = "The Antelope Creek people started living in Texas around this time.";
            break;
        case (prefix + "1400"):
            res = "The Lipan Apache people arrive in Texas";
            break;
        case (prefix + "1492"):
            res = "In this year, Colombus set sail from Spain and eventually arrived in the Bahamas";
            break;
        case (prefix + "1519"):
            res = "Spanish explorer Alonso Alvarez de Pineda is the first European to explore and map the Gulf of Mexico";
            break;
        case (prefix + "1527"):
            res = "In this year, Panfilo de Narvaez set out for Florida with a large fleet of ships, men, and horses in hopes to find gold, but the mission ends up being a fail.";
            break;
        case (prefix + "1528"):
            res = "Alvar Nunez Cabeza de Vaca, one of the four survivors of the Narvaez expedition, washed up on the beach of and island he named Malhado. For the next few years, he lived multiple times as a slave to many American Indians. He also encountered the Karankawas, making him the first European man to meet with any American Indians";
            break;
        case (prefix + "1536"):
            res = "Bartolomé de Casas was ordained on this year, making him the very first priest to be ordained in the Americas.";
            break;
        case (prefix + "1541"):
            res = "Following the report of an explorer who claimed to have seen a 'golden city' in a desert, Francisco Vázquez de Coronado organized an expidition that went through the Texas Panhandle";
            break;
        case (prefix + "1542"):
            res = "Hernando de Soto led an exploration in 1539, and soon died in 1542, where Luis de Moscoso led his explorers into East Texas";
            break;
        case (prefix + "1543"):
            res = "The first oil in Texas is discovered floating in water near Sabine Pass";
            break;
        case (prefix + "1554"):
            res = "In 1554, 3 of the initial 54 vessels that sailed out from Spain in 1552 crashed on Padre Island due to a storm";
            break;
        case (prefix + "1581"):
            res = "Around this time, the first missionaries passed through far west Texas";
            break;
        case (prefix + "1598"):
            res = "After a difficult march, Juan de Oñate and many other settlers finally reached the Rio Grande in April. Once they did, they had what some to believe to be the first 'thanksgiving' feast in what would become the United States";
            break;
        case (prefix + "1610"):
            res = "The Spanish had established a capital at Sante Fe and a few priests began to venture west this year";
            break;
        case (prefix + "1629"):
            res = "Almost 50 years later, after their first encounter, the Jumano were revisited by the spanish in this year";
            break;
        case (prefix + "1632"):
            res = "During this year, Juan de Salas and Juan de Ortega established the first mission near present-day San Angelo";
            break;
        case (prefix + "1670"):
            res = "In 1670, Franciscans established the La Junta Mission, but they were expelled after just two years";
            break;
        case (prefix + "1680"):
            res = "Pueblo people revolted against the Spanish colonists and drove them out of present-day New Mexico, and El Paso was also born";
            break;
        case (prefix + "1687"):
            res = "The Mayeye (which was a Tonkawa Tribe), first encounter La Salle and his colonists";
            break;
        case (prefix + "1688"):
            res = "Franciscans established two missions, El Apóstol Santiago on Alamito Creek and La Navidad en los Cruces along the Rio Grande. By 1688, these missions were abandoned";
            break;
        case (prefix + "1690"):
            res = "The Spanish began making entradas";
            break;
        case (prefix + "1690"):
            res = "The Spanish realize they need to defend Texas and they blaze a network of trails. The missions of San Francisco de los Tejas and Santisimo Nombre de Maria were also established along the Neches River";
            break;
        case (prefix + "1700"):
            res = "Around this year, the Apaches were forced South by the Comanche and the two became enemies. Also, up to 1713, Spain was involved in a European war and Texas was not a priority";
            break;
        case (prefix + "1718"):
            res = "San Antonio was founded";
            break;
        case (prefix + "1719"):
            res = "The Chicken War took place";
            break;
        case (prefix + "1730"):
            res = "By now, missionaries were operating cattle ranches around San Antonio and Goliad. Three missionaries were also relocated from East Texas to present-day Austin";
            break;
        case (prefix + "1749"):
            res = "The Apache and the Spanish make peace";
            break;
        case (prefix + "1750"):
            res = "The Whichita settle along the Red River. Ranching land expansion also became safer once the Spanish formed an alliance with the Apaches";
            break;
        case (prefix + "1758"):
            res = "In March of 1758, over 2000 Comanches and allied other northern tribes staged a massive attack, burning down the Santa Cruz de San Sabá mission and killing all but one of the missionaries";
            break;
        case (prefix + "1759"):
            res = "In response to the destruction of Mission Santa Cruz de San Sabá, forces of 600 Spanish soldiers attacked the Whichita village on the Red River";
            break;
        case (prefix + "1762"):
            res = "The Spanish officials broke their alliance with the Apache in favor of a Spanish-Comanche alliance";
            break;
        case (prefix + "1763"):
            res = "The Alabama and Coushatta Tribes migrates to the area of Big Thicket in present-day Texas";
            break;
        case (prefix + "1771"):
            res = "The Spanish made treaties with the Caddo, WHichita, and Tonkawa tribes";
            break;
        case (prefix + "1775"):
            res = "The Smallpox epidemic arose and killed hundreds of thousands of Europeans and Native people in North America";
            break;
        case (prefix + "1778"):
            res = "A new law was passed that all wild animals and unbranded livestock were property of the Spanish treasury";
            break;
        case (prefix + "1779"):
            res = "El Mocho became a chief of the Tonkawa after a smallpox epidemic killed most of the tribe's elders";
            break;
        case (prefix + "1780"):
            res = "After lifting the trade ban in 1779, the Spanish government reversed that decision because of hte surge of smuggling";
            break;
        case (prefix + "1785"):
            res = "The Comanche accepted a peace deal with the Spanish";
            break;
        case (prefix + "1787"):
            res = "Due to the San Fernando Memorial ruling, ranchers and missionaries planned a great round-up in 1787. La Bahia was the only mission to actually participate";
            break;
        case (prefix + "1795"):
            res = "Ranchers were no longer required to pay the Mustang Fund taxes and were given one tax-free year to round up and brand livestock";
            break;
        case (prefix + "1800"):
            res = "Cattle herds became severely depleted and ranchers turned their money-,aking efforts toward a new livestock source - wild mustangs";
            break;
        case (prefix + "1807"):
            res = "Cherokees were first reported when a small band established a village on the Red River";
            break;
        case (prefix + "1820"):
            res = "Moses Austin traveled to San Antonio and negotiated permission to settle 300 Anglo American families in Texas. Between this year and 1824, Mexico also won its independence and Steven F. Austin founds a new colony";
            break;
        case (prefix + "1821"):
            res = "The Mexican territory of Tejas was opened to settlers";
            break;
        case (prefix + "1822"):
            res = "Cherokee Chief Bowl sent diplomatic chief Richard Fields to Mexico to negotiate with the Mexican government for a grant to land occupied by Cherokees in East Texas";
            break;
        //teks
        case ("$tek%" + "7.4B"):
            res = 'After the Texas Revolution, the Texans and the Mexicans signed two treaties, both called the Treaty of Velasco. There was the Public Treaty of Velasco and the Secret Treaty of Velasco. The terms of the public version were: ​The war between Mexico and Texas was officially ended, and Texas was independent.​ ​Santa Anna would not take up arms against Texas .All Mexican forces would withdraw beyond the Rio Grande.​ Prisoners would be returned to their homes.​ All Mexican forces would withdraw beyond the Rio Grande. The Mexicans would return all captured property.​ Texas leaders would promptly return Santa Anna to Mexico. The Secret Treaty said that in exchange for ​Santa Anna’s immediate release, he would try to persuade Mexican ​leaders to recognize Texas independence. Santa Anna also agreed to ​promote the Rio Grande as Mexico’s border with Texas.​ Although General Filisola immediately began to remove his troops from Texas, the Texans did not follow through on ​their part of the treaty. The Texas army refused to return Santa Anna to ​Mexico, instead keeping him prisoner at Velasco. In fact, the Texas government chose to send Santa Anna to Washington, DC, rather than back to Mexico. The official purpose of the Washington trip was to negotiate a lasting peace between Texas and Mexico, but nothing came of it. Likewise, the Mexican government refused to honor the terms of ​the treaty. Mexican leaders stated that Santa Anna, as a prisoner of war, ​was no longer their president and had no authority to sign a treaty. As a ​result, the Mexican government refused to ratify the treaties. Although Texas had won its freedom, Mexico refused to acknowledge the fact, and ​would continue to refuse for many years.​A second major challenge facing the Republic of Texas was to form a new government. The Constitution of 1836 required that elections be held to select new leaders. At the same time, Texans would decide whether to approve the Constitution of 1836 and whether to pursue annexation of Texas to the United States. Burnet wrote in a letter that the election would probably “be conducted with a good deal of spirit. Three well-known Texans ran for president—Stephen F. Austin, Sam Houston, and Henry Smith. Of the three candidates, Houston was the most popular. After all, “Old Sam Jacinto,” as he became known, had led the Texans to victory. Many Texans shared the view of this supporter.​ Houston won the presidency by a landslide, and Mirabeau B. Lamar was elected vice president. Houston stressed the need ​for peace with American Indians and the need to stay alert and guard ​against an attack by Mexico. He also expressed his hope of seeing Texas ​annexed to the United States.​ To address the problem, Houston needed a cabinet, or a group of advisors. However, Stephen F. Austin, who was appointed Secretary of State, died of pneumonia as a result of overwork and exposure to cold. President Houston made a statement about his death. “The father of Texas is no more. The first pioneer of the wilderness has departed.” He ordered a 30-day period of mourning to honor Austin.​ After the 30-day period, Houston needed to establish boundaries for the new nation as well as a capital. They decided to establish the small town of Houston as the new capital. After Houston’s first term, he couldn’t rerun because the Constitution stated that a president couldn’t do more than one term in a row. So Mirabeau Lamar was elected, who, unlike Houston, had an anti-Indian policy. He moved the capital to Austin because he wanted the political center out West instead of in the East.';
            break;
        case ("$tek%" + "7.4C"):
            res = 'The Mexican-American War also known in the U.S as the Mexican War lasted from April 25, 1846 - February 2, 1848. In the end, the U.S. won and they signed the Treaty of Guadalupe Hidalgo. The Treaty of Guadalupe Hidalgo, signed on February 2, 1848, ended the war between the United States and Mexico. Mexico ended up with 55% of its territory including parts of present-day Arizona, California, New Mexico, Texas, Colorado, Nevada, and Utah. Slavery was very popular in Texas in the late 1830’s and 1840s because it was legal and it was forcing African Americans to work for them without pay. Texas had a large debt of $12 million dollars by 1850 so they had to eliminate that debt so they came up with the Compromise of 1850. The Compromise of 1850 was a compromise where Texas gave up its claim to 67 million acres of land in present-day Colorado, Kansas, New Mexico, Oklahoma, and Wyoming. In return, the federal government gave Texas money to help pay the debt. In this way, the debt was paid off completely by 1855.';
            break;
        case ("$tek%" + "7.10A"):
            res = "African Americans in texas primarily came from immigrants from the south as slaves after the revolution. And the number of enslaved people in texas in 1836 was 5,000 people this number increased exponentially. In 1845 there were at least 30,000 slaves in texas. The constitution of 1836 required free african americans to get permission from congress to stay in the republic.Three petitions were put forth in front of congress on behalf of the Ashworth family. So in response, the congress passed the Ashworth act which allowed all of the free african americans to stay in texas. This didn’t mean that they wouldn’t face prejudice however as many people like William Goyens would still face discrimination. Tejanos primarily lived in the southern part of Texas near San Antonio and Guadalupe rivers; a lot of tejanos had their properties stolen from them and were forced to flee. In reaction to poor treatment from immigrants from the U.S. Cordova led a small group of tejano and indian allies which took up arms for what is now called the Cordova Rebellion. This was halted when Houston forced the army to end the rebellion which made Cordova flee to Mexico. 33 tejanos from nacogdoches were captured and tried for treason; they were eventually released but resentful Anglos attacked tejanos causing over 100 tejanos to leave. It is difficult to estimate how many American Indians lived in the Texas ​Republic. New groups of American Indians arrived in Texas throughout the 1820s and 1830s which primarily lived in east texas. Like African Americans and Tejanos, American Indians faced discrimination in the Texas Republic. Even with Houston’s treaties, relations between ​Indians and the government were strained.​​ During the 1830s and 1840s a large number of European immigrants like ​Gentilz and Frétellière moved to Texas; however, the largest group was Germans, who settled in the early 1830s. In 1842 a group of German businesspeople formed the German ​Emigration Company, or Adelsverein. Its members hoped to make a ​profit by encouraging Germans to settle in Texas. After acquiring land in the hill country the company sent Prince Carl of Solms-Braunfels to Texas in 1844 followed by peasants and craftspeople. Once in Texas, Prince Carl established a port for incoming set- Tlers called Karlshafen which was later renamed to Indianola. In March of 1845 Prince Carl established New Braunfels,and when Prince Carl returned home two months later, Baron Otfried ​Hans Freiherr von Meusebach replaced him. By 1847 the German Emigration Company had sent more than 7,000 ​immigrants to Texas. There they formed new settlements, including Fredericksburg, Boerne, ​and Comfort. These and other settlements extended the western frontier ​of Texas. Even today many Texas Hill Country towns ​reflect their German heritage in their names, architecture, churches, ​food, and language. In 1840 Texas and France signed a treaty that encouraged French ​immigration. A few years later, Henri Castro brought one of the first ​groups of French settlers to Texas; many of them were from the province ​of Alsace, a mostly German-speaking area in eastern France. Castro ​founded the town of Castroville in 1844 near the Medina River, and by 1846 ​Castro had helped settle more than 2,000 colonists along the river, most ​of whom became farmers and ranchers. Irish settlers had come to Texas long before it was a republic. During ​the 1820s several Irishmen had received empresario contracts. Many Irish immigrants fought with ​the Texas troops at the Alamo, Goliad, and San Jacinto. Irish-born Texan William Kennedy encouraged this ​immigration in his 1841 book, Texas: The Rise, Progress, and Prospects of ​​the Republic of Texas. Some Polish and Czech immigrants had also made their way to ​Texas, settling in South and Central Texas.";
            break;
        case ("$tek%" + "7.18B"):
            res = 'Most of the tejanos, mexicans and native americans and african americans did not benefit from the annexation of texas. Many of them had lived in Texas for decades. Their families live there for generations. The Tejanos and Mexicans were constantly discriminated against especially during the Mexican American War. The U.S. started to force the native americans off their land. The vast majority of african americans ended up as slaves. These racial groups were hurt by the annexation into the U.S. The state constitution prohibited them from living free in Texas without special permission. And if they did live in Texas they were denied citizenship. Life was better for the large groups of immigrants. They were drawn to Texas by the promise of land. The settlers arrived in a wave hungry for land and the right to own slaves. But the annexation made tensions with Mexico rise. But there was still the issue of slavery. The solution to those issues was the compromise of 1850. This allowed California to enter as a free state and gave power to the western  territories. Overall african americans were not treated right at all and going into the U.S. it only got worse for them. Not until the Civil War did african americans become free. The african americans were treated wrongly. And they should have been treated better.';
            break;
        case ("$tek%7.18B%kahoot"):
            res = "<a href='https://play.kahoot.it/v2/?quizId=6b35006d-4df8-48a4-b4e8-5aab62b4ad54'>7.18B Kahoot</a>"
        case ("$tek%" + "7.1B"):
            res = 'The Texas annexation had both positive and negative impacts on the United States. First the negative impacts. Because Texas favored slavery, it threatened the balance in congress between free and slave states. To throw congress out of balance would mean almost certainly slavery would forever be a part of the US. Not only that but Texas had recently beaten Mexico to declare its independence, and many were worried this would spark tensions between the US and Mexico. Not to mention the still disputed boundaries of the new border. In the end, James K. Polk annexed Texas, thinking the good outweighed the bad. Unfortunately, this did lead to a war with Mexico. The very heavily disputed border was the cause. A US military unit advanced to the mouth of the Rio Grande where Texas claimed its border was. Mexico, thinking it was further back, crossed the Rio Grande, and this was seen as an invasion. Congress declared war on Mexico. There were positives to come out of the annexation of Texas. The US would acquire a huge plot of land through the Treaty of Guadalupe Hidalgo in 1848, as well as the Gadsden purchase in 1854. This land would eventually become Arizona, California, Colorado, Nevada, New Mexico, Utah and Wyoming from Guadalupe Hidalgo and extra parts of Arizona and New Mexico from the Gadsden Purchase. This would lead to the reduction of Mexico by over half its land. While the territories won provided more land for the US, it brought about very heated debates about who should be a slave state and who should be free, and eventually the Civil War broke out. WHile Texas was a republic, they had their own problems. Because of the Texas Revolution, Texas was in serious debt, and the soldiers that fought in the war wanted pay, also creating unrest in the army. There were also problems with Indians. Native Americans in East Texas were occupying valuable space that Anglo colonists wanted to use; Native Americans in Central and West Texas were hostile and often raided settlements and killed settlers because the settlers were “taking” the Native Americans land. The location of the capital of Texas also couldn’t be decided. Troubles with Mexico still remained present, and Mexico posed a threat to Texas because of its size and power. The only thing that kept Mexico “at bay” was between Texas and the United States. As a country, the new Republic struggled to be recognized by other countries. Local issues were a big deal, like no good access to education and travel was hard. Overall, trying to start a country after a big war that left Texas crippled wasn’t the best idea and it would have been better to annex right away. Texas just simply wasn’t ready to be its own country.';
            break;
        //memes
        case ("$texas.history%meme"):
            res = "<img src='./texashistorymemes/texasmemes" + Math.floor(Math.random() * 40) + ".png' width='35%' height='35%' style='border-radius:20px;border-width:10px;border-color:black;'>";
            break;
        default:
            return;
    }
    fetch.innerHTML = res;
}