import { ModalInterface } from "../types/modals";

export const modalData: ModalInterface[] = [
  {
    title: "Dwelling by Walling",
    people: ["Seunggyun Han", "Taewon Choi", "Jisoo Kim"],
    awarded: "Bronze Prize at Gyeonggi Architecture Culture Festival, 2016",
    description: `
<img src="image/dwelling/mainsection.png">
<h3>Concept</h3>
<p>Utilize boundaries as a platform for Community</p>
<p> The house consisted with flexible walls which people can move and change for
    requirements of individuals and community.</p>
<img src="image/dwelling/concept1.jpg">
<p>Planning corridor between dwelling units as a specific program for
   living, working and playing</p>
<p>The corridor in the apartment has been used as a space for mobility without
    any programs. In this project, we suggested making entire of building as an urban ecosystem of
    'Live, Work, Play' through utilizing the abandoned corridors</p>
<img src="image/dwelling/concept2.jpg">
<h3>Strategy</h3>
<p>Design the size of wall modules by consideration of dimensions in daily activities and
   furniture.</p>
<img src="image/dwelling/dimension.jpg">
<img src="image/dwelling/dimension2.jpg">
<h3>Wall Design Detail</h3>
<p>There are two wall modules for different usages. Type A (thickness : 100mm) is for an inner wall of
   the dwelling unit, and Type B (thickness : 200mm) is for an exterior wall of the dwelling unit. Wall
   Modules are combined with profiles.</p>
<img src="image/dwelling/wallmodule.jpg">
<img src="image/dwelling/joint.jpg">
<img src="image/dwelling/jointiso.jpg">
<h3>Functions</h3>
<img src="image/dwelling/wall%20type.jpg">
<h3>Scenario</h3>
<p>Unit Prototype</p>
<p>In this project, we suggested four prototype units for couples and youths</p>
<img src="image/dwelling/unitproto.jpg">
<h3>#1. Buy the space</h3>
<p>Residents buy floor space as much as they need, and later, they can buy or sell more space as
   needed.</p>
<img src="image/dwelling/scene-1.jpg">
<p>Facilities and structures are provided as fixed elements, and the rest of
    the walls are freely configurable by the residents.</p>
<img src="image/dwelling/scene-1-1.jpg">
<h3>#2. Wall Building</h3>
<p>Space is organized according to residents' preferences with wall modules provided. Wall modules are
    provided in a variety of types, such as storage, doors, and windows.</p>
<img src="image/dwelling/scene-2.jpg">
<img src="image/dwelling/scene-2-2.jpg">
<h3>#3. Create community space</h3>
<p>Through discussions between residents, the community decides how to use corridor spaces. And people
    install wall modules accordingly the program.</p>
<img src="image/dwelling/scene-3.jpg">
<img src="image/dwelling/scene-3-2.jpg">
<h3>#4. Change of the Boundaries</h3>
<p>Neighbors concede their space and share the area with neighbors for leisure.</p>
<img src="image/dwelling/scene4.jpg">
<img src="image/dwelling/scene-4-2.jpg">
<h3>#5. Expansion of the Boundaries</h3>
<p>The first floor, which is the boundary between the building and the outside, consists of several
    programs for sharing with neighbors from the outside such as car sharing, community room, and open
    exhibition <br/>
    In addition, at the rooftop garden, events for the town such as film festivals
    are held.</p>
<img src="image/dwelling/scene5-1.jpg">
<img src="image/dwelling/scene5-2.jpg">
<img src="image/dwelling/scene-5-3.jpg">
<h3>Sustainable changes with various types</h3>
<img src="image/dwelling/scene6.jpg">
<h3>Drawings and Models</h3>
<img src="image/dwelling/1fplan.png">
<img src="image/dwelling/2fplan.png">
<img src="image/dwelling/3fplan.png">
<img src="image/dwelling/4fplan.png">
<img src="image/dwelling/5fplan.png">
<img src="image/dwelling/section1.png">
<img src="image/dwelling/section2.png">
<img src="image/dwelling/section3.png">
<img src="image/dwelling/elevation.png">
<img src="image/dwelling/model1.jpg">    
    `,
  },
  {
    title: "The Frame",
    people: ["Seunggyun Han", "Graduation work in SKKU"],
    awarded:
      "Design excellence award (1st prize) in SKKU spring semester, 2016",
    description: `
<img src="image/theFrame/theFrame4.jpg">
<h3>Concept: Cultural Connectivity Between Different Programs and levels</h3>
<p>
 - Planning culture facility through connecting indoor space of building and
    waterfront area. <br/>
 - Accumulating cultural activities that occur on the various levels at the
    waterfront.
</p>
<img src="image/theFrame/theFrame9.png">
<h3>Drawings (Plans)</h3>
<img src="image/theFrame/b1f.png">
<img src="image/theFrame/1f.png">
<img src="image/theFrame/4f.png">
<h3>Model & Images</h3>
<img src="image/theFrame/theFrame3.jpg">
<img src="image/theFrame/theFrame1.jpg">
<img src="image/theFrame/4.jpg">
<img src="image/theFrame/theFrame5.png">
<img src="image/theFrame/theFrame7.png">
<img src="image/theFrame/theFrame6.png">
    `,
  },
  {
    title: "Plan Generator",
    people: ["Seunggyun Han"],
    awarded:
      "Excellent Research Award, 12th International Symposium on Architectural Interchanges in Asia, 2018",
    description: `
<h3>Overview</h3>
<p>Deep learning(DCGANs) for generating small sized housing plans</p>
<p style="margin-top:0;"> As learning progressed, the neural network drew thick lines (which could be
    thought as walls), and it also drew rectangular spaces like rooms. However, in most of attempts, the
    neural nets drew only irregularly lines.</p>
<img src="image/plan/7.jpg">
<h3>Background</h3>
<p>After AlexNet, Deep Learning have become mainstream in Computer Vision Field. Deep Learning have been
    used for not only image classification but also image synthesis and Generation.</p>
<img src="image/plan/1.jpg">
<p>Regarding to “Design”, there are several attempts to generate virtual objects
    (shoes, chairs, clothes, etc.)</p>
<p>Regarding to “Architecture”, there are several attempts to Generating 2D Images
    of fake Indoor Environment and Generating virtual building elevation base on human’s sketch</p>
<img src="image/plan/3.jpg">
<p>Despite of many studies about designing with AI, the use of Deep Learning, especially GANS, in the
    field of architectural design is rarely progressed</p>
<p>To utilize GAN as a field of Computer Aided Design, it is important to build AI
    model which generates architectural plan using GAN <br/>
    - Plan is one of the most basic and important
    parts in architectural design process<br/>
    - It is obvious that there are several patterns among the architectural plans which are designed for
    similar programs and sizes<br/>
    - Also, we can find several types of patterns like wall, room, unit, etc
</p>

<h3>Object</h3>
<p>Design a deep learning model which generates small sized housing plans</p>
<p>By doing experiment with small dataset, we want to check if there is any
    possibility of producing realistic drawings with better computing power and larger datasets</p>

<h3>Process</h3>
<img src="image/plan/4.jpg">

<h3>Model Architecture</h3>
<p>Model architecture is based on DCGANs Structure</p>
<p>- Consist with two adversarial nets, ①
    Generator(G), ② Discriminator(D)<br/>
    - Generator creates fake data(X') from noise(Z)<br/>
    - Discriminator distinguishes real(X) and fake(X') data<br/>
    - The objective of G is deceive D, and D is trained for preventing G doing it
</p>
<p>Learning rate of G = 0.001, D = 0.0006</p>
<p>The number of epoch was 200, and batch size was 16. Adam optimizer was used(beta=0.2).</p>
<img src="image/plan/6.jpg">
<p style="margin-top:0;">Dropout layer is added after the final fully connected layer (Keep_prob :
    0.3)</p>
<img src="image/plan/5.jpg">

<h3>Data Pre-processing and Augmentation</h3>

<img src="image/plan/8.png">
<p>This study used small housing plans as input dataset. To decrease complexity of input data, we
    selected plans of one or two bedrooms houses. To solve the memory problem, all data was processed in
    grayscale.
    Also, in order to increase the learning effect, we simplified each plan by removing all variables
    such as furniture, trees, people, and doors.</p>
<p>Because the dataset was too small, we used data augmentation concept in data pre-processing. Every
    image was rotated by 90, 180, and 270 degrees. In addition to this, we resized every image by
    95%,90%, and 85%. </p>

<h3>Result</h3>
<p>As learning progressed, the neural network began to draw thick lines (which could be thought of as
    walls), and in several attempts, they also drew several squares like rooms. However, in most of
    attempts, the neural nets drew only irregularly lines.
    After 10th epoch, the discriminator loss was usually between 0.9~1.1, and the generator loss was
    usually between 1.0~3.0. During training procedure, it seems to be there were little of learning
    effect after 70th epoch.
</p>
<img src="image/plan/8.jpg">

<h3>Problems and Possibility</h3>
<p>The main problem in training process was the size of dataset. Architectural plan dataset was
    consisted with only 128 images even if it has more complex patterns and characteristics than celeb
    dataset (200,000 images) or the mnist dataset (60,000 images) which were used for test training
    procedure of this model.</p>
<p>In addition to this, because the drawing method is different for each plan, it is difficult for the
    neural net to recognize the pattern even if we simplified plans.</p>
<p>To solve this problem, first of all, it is necessary to construct large architectural plan dataset
    drawn in the same style.</p>
<p>To utilize this model to design process, We suggest advanced model that creates plans by receiving
    not only noise but also information from a diagram or sketch drawn by an architect. </p>

<img src="image/plan/9.jpg">

<h3>Reference</h3>
<ul class='reference'>
<li>Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi
    Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, Yoshua Bengio(2014), Generative
    Adversarial Nets, In Advances in Neural Information Processing Systems, 2672-2680</li>
<li>Alex Radford, Luke Metz and Soumith
    Chintala(2015), Unsupervised Representation Learning With Deep Convolutional Generative Adversarial
    Networks, arXiv:1511.06434</li>
<li>Evgeny Zamyatin and Andrey Filchenkov(2017),
    Learning to Generate Chairs with Generative Adversarial Nets, arXiv:1705.10413</li>
<li>Jaime Deverall, Jiwoo Lee and Miguel
    Ayala(2017), Using Generative Adversarial Networks to Design Shoes: The Preliminary Steps,
    http://cs231n.stanford.edu/reports/2017/pdfs/119.pdf</li>
<li>Yeongjae Lee(2018), A study on the Performance
    of the Generative Adversarial Networks, Inje University</li>
<li>Yoon-Hyuk Lee, Dong-Wook Kim and Young-Ho Seo,
    Hologram Generation Method using DCGAN, 209-210, The Korean Institute of Broadcasting and Media
    Engineering Summer Conference, 2018.06</lis=>
<li>Tim Salimans, Ian Goodfellow, Wojciech Zaremba,
    Vicki Cheung, Alec Radford, and Xi Chen(2016), Improved Techniques for Training GANs,
    arXiv:1606.03498</li=>
<li>Mckinsey & Company, ‘An excutive Guide to AI’,
    https://www.mckinsey.com/business-functions/mckinsey-analytics/our-insights/an-executives-guide-to-ai</liss=>
<li>Othman Sbai, Mohamed Elhoseiny, Antoine Bordes,
    Yann Lecun(2018), Design Inspiration from Generative Networks, arXiv:1804.00921v2</li>
</ul>
            
        
    `,
  },
];
