import React from "react";
import "../styles/disclaimer.css"; 
import Footer from "../components/Footer/Footer";
import DynamicHeader from "../components/Header/DynamicHeader";

const DisclaimerPage = () => {
  const role = localStorage.getItem("userRole");
  return (
    <>

    <DynamicHeader role={role} />
      <div className="disclaimer-container">        
        <div className="disclaimer-content">
          <h1>ДИСКЛЕЙМЕР</h1>
          <p className="update-date">Відмова від відповідальності</p>
          <p className="update-date">Оновлено від 2021-08-20</p>
          <section>
           
            <p className="update-date">
Компанія Mindly цим надає вам доступ до сайту https://mindlyspace.com ("Сайт") та запрошує вас придбати запропоновані тут послуги.
<br/>
Визначення та ключові терміни <br/>
Щоб допомогти пояснити все якомога зрозуміліше в даній відмові від відповідальності, кожного разу, коли згадується будь-який з цих термінів, вони визначаються як:
<br/>
Cookie: невеликий обсяг даних, що генеруються вебсайтом та зберігаються вашим веббраузером. Він використовується для ідентифікації вашого браузера, забезпечення аналітики, запам`ятовування інформації про вас, наприклад ваших мовних уподобань або інформації для входу в систему.
<br/>
Компанія: коли в цій політиці згадується "Компанія", "ми", "нас" або "наш", це стосується Mindly Europe OU, Ahtri tn 12, Tallinn 10151, Estonia, яка несе відповідальність за вашу інформацію відповідно до даної Відмови.
<br/>
Послуга: належить до послуги Mindly, як описано у відповідних умовах (якщо є) на даній платформі.
<br/>
Сайт: сайт, доступ до якого можна отримати за цією URL-адресою: https://mindlyspace.com.
<br/>
Ви: фізична або юридична особа, що зареєстрована у Mindly для використання Послуг.
<br/>
Обмежена відповідальність
<br/>
Mindly прагне регулярно оновлювати та/або доповнювати зміст веб-сайту/додатку. Всупереч нашій турботі та увазі, зміст може бути неповним та/або неправильним.
<br/>
Матеріали, які пропонуються на веб-сайті/додатку, пропонуються без будь-якої форми гарантії або претензії на їх вірність. Ці матеріали можуть бути змінені в будь-який час без попереднього повідомлення Mindly.
Зокрема, всі ціни на сайті/додатку вказані з урахуванням помилок та помилок програмування. Ми не несемо жодної відповідальності за наслідки таких помилок.
<br/>
Mindly не несе жодної відповідальності за гіперпосилання на веб-сайти або послуги третіх осіб, розміщені на веб-сайті/додатку. З нашого сайту/програми ви можете відвідувати інші сайти, переходячи за посиланнями на зовнішні сайти. Хоча ми прагнемо надавати лише якісні посилання на корисні та етичні веб-сайти, ми не контролюємо зміст та характер цих сайтів. Ці посилання на інші сайти не означають нашої рекомендації щодо всього вмісту, знайденого на цих сайтах. Власники сайтів та їх зміст можуть змінюватися без попереднього повідомлення, і це може статися до того, як у нас з`явиться можливість видалити посилання, яке могло "зіпсуватися".
<br/>
Будь ласка, майте на увазі, що коли ви залишаєте наш сайт/додаток, інші сайти можуть мати іншу політику конфіденційності та умови, що ми не можемо контролювати. Будь ласка, обов`язково ознайомтеся з політикою конфіденційності цих сайтів, а також з їх "Умовами надання послуг", перш ніж займатися будь-якою діяльністю або завантажувати будь-яку інформацію.
<br/>
Відмова від посилань на інші вебсайти
<br/>
Ця відмова від відповідальності стосується лише Послуг. Послуги можуть містити посилання на інші сайти, які не керуються і не контролюються Mindly. Ми не несемо відповідальності за зміст, точність чи думки, висловлені на таких сайтах, і такі сайти не досліджуються, не контролюються та не перевіряються нами на точність чи повноту. Будь ласка, пам`ятайте, що, коли ви використовуєте посилання для переходу з Послуг на інший сайт, наша Політика конфіденційності більше не діє. Ваш перегляд та взаємодія на будь-якому іншому сайті, включаючи ті, що мають посилання на нашій платформі, підпорядковуються правилам та політиці цього сайту. Такі треті особи можуть використовувати власні файли cookie або інші методи для збору інформації про вас. Якщо Ви натиснете на посилання третьої особи, Ви будете направлені на сайт цієї третьої особи. Ми настійно рекомендуємо Вам ознайомитися з політикою конфіденційності та умовами кожного сайту, який Ви відвідуєте.
Ми не контролюємо та не несемо відповідальності за зміст, політику конфіденційності чи практику використання сайтів чи послуг третіх осіб.
<br/>
Відмова від відповідальності за помилки та недогляди
<br/>
Mindly не несе відповідальності за зміст, код або будь-які інші неточності. Mindly не надає гарантій та не надає запоруки. За жодних обставин Mindly не несе відповідальності за будь-які спеціальні, прямі, непрямі, побічні або випадкові збитки або будь-які інші збитки, будь то внаслідок дії договору, недбалості чи іншого правопорушення, що виникли в результаті або у зв`язку з використанням Послуги або вмісту Послуги. Mindly залишає за собою право вносити доповнення, видалення або зміни до змісту Послуги в будь-який час без попередження.
<br/>
Загальна відмова від відповідальності
<br/>
Сервіс Mindly та його вміст надаються "як є" і "як доступно" без будь-яких гарантій або заяв будь-якого роду, явних або на увазі. Mindly є дистриб`ютором, а не видавцем вмісту, що надається третіми особами; як така, Mindly не здійснює редакційний контроль над таким вмістом і не дає жодних гарантій чи заяв щодо точності, надійності чи актуальності будь-якої інформації, вмісту, послуг чи товарів, що надаються через Сервіс Mindly або доступні через нього. Не обмежуючи вищезазначене, Mindly спеціально відмовляється від усіх гарантій та заяв щодо будь-якого контенту, що передається через або у зв`язку з Послугою Mindly або на сайтах, які можуть з`являтися як посилання на Послуги Mindly, або у продуктах, що надаються як частина Послуги Mindly або іншим чином пов`язаних з нею, включаючи без обмежень будь-які гарантії товарного стану, придатності для конкретної мети або непорушення прав третіх осіб. Жодні усні поради чи письмова інформація, надана компанією Mindly або будь-якими її філіями, співробітниками, посадовими особами, директорами, агентами тощо, не створюють гарантій. Інформація про ціни та наявність товару може бути змінена без попередження. Не обмежуючи вищесказане, Mindly не гарантує, що Служба Mindly працюватиме безперервно, без збоїв, своєчасно чи без помилок.
<br/>
Відмова від авторських прав
<br/>
Всі права інтелектуальної власності на ці матеріали належать Mindly. Копіювання, розповсюдження та будь-яке інше використання цих матеріалів не допускається без письмового дозволу Mindly, за винятком і тільки тією мірою, в якій інше передбачено нормами обов`язкового права (наприклад, право на цитування), якщо для певних матеріалів не зазначено інше.
<br/>
Партнерскі посилання
<br/>
Mindly має партнерські посилання, і в цьому розділі відмови ми розглянемо, як ми використовуємо ці партнерські посилання з інших сайтів/компаній та продуктів. Ці "партнерські посилання" є певними URL-адресами, що містять ідентифікатор або ім`я користувача партнера. Відповідно до рекомендацій FTC, будь ласка, прийміть до уваги наступне щодо посилань та повідомлень на цьому сайті: Всі посилання на Mindly є партнерськими посиланнями, за що ми отримуємо невелику комісію від продажу певних товарів, але ціна для вас залишається незмінною. Зі зростанням Mindly зростають і витрати, пов`язані з його експлуатацією та обслуговуванням, та партнерські посилання – це спосіб, яким ми допомагаємо компенсувати ці витрати. Якщо ми розміщуємо партнерське посилання на продукт, це те, що ми особисто використовуємо, підтримуємо та рекомендували б без партнерського посилання.
Якщо не зазначено інше, всі огляди відносяться до товарів, які ми придбали, і ми не отримуємо жодної оплати чи компенсації. Ми можемо брати участь у таких партнерських програмах, як:
<br/>
Розкриття інформації про здоров`я
<br/>
Матеріали на цьому сайті/додатку, такі як текст, графіка, зображення та інші матеріали, створені Mindly або отримані від ліцензіарів, а також інші матеріали, що містяться на Mindly (далі "зміст"), призначені виключно для інформаційних цілей і не можуть бути використані як заміна професійної консультації та/або інформації, оскільки обставини можуть бути різними у різних людей. Ви не повинні діяти або покладатися на цю інформацію, не звернувшись за професійною консультацією. Не намагайтеся робити будь-які запропоновані дії, рішення, засоби чи інструкції, знайдені на цьому сайті/додатку, без попередньої консультації з кваліфікованим фахівцем. Матеріали не призначені та не є професійною консультацією. Передача цієї інформації не спрямована на створення професійно-клієнтських відносин між Level Up Enterprises та вами. Власники, редактори, укладачі, адміністратори та інші співробітники Level Up Enterprises не є кваліфікованими фахівцями та просто узагальнюють інформацію, знайдену в Інтернеті, виключно з інформаційною метою.
Якщо ви вважаєте, що у вас може виникнути невідкладна медична ситуація, негайно зателефонуйте своєму лікарю або у службу порятунку. Покладатися на будь-яку інформацію, надану Mindly, співробітниками Mindly, іншими особами, які з`являються на сайті/додатку на запрошення Mindly, або іншими відвідувачами сайту/додатку, ви можете виключно на свій страх та ризик.
<br/>
Розкриття інформації щодо використання послуг охорони здоров`я
<br/>
Будь ласка, прочитайте цю інформацію про стан здоров`я, перш ніж застосовувати будь-яку інформацію на сайті/додатку.
Ми надаємо інформацію про консультації щодо правил здорового способу життя та харчування. Інформація на цьому сайті/додатку, така як текст, графіка, зображення та інші матеріали, створені Mindly або отримані від ліцензіарів, а також інші матеріали, що містяться на Mindly (далі "контент"), призначені виключно для інформаційних цілей і не можуть бути використані як заміна професійної консультації та/або інформації, оскільки обставини можуть бути різними у різних людей. Ви не повинні діяти або покладатися на цю інформацію, не звернувшись за професійною консультацією. Не намагайтеся робити будь-які запропоновані дії, рішення, засоби чи інструкції, знайдені на цьому сайті/додатку, без попередньої консультації з кваліфікованим фахівцем. Матеріали не призначені та не є професійною консультацією. Якщо ви використовуєте будь-яку інформацію, надану на Mindly, ви дієте на свій страх та ризик. Регулярні фізичні вправи не завжди позбавлені ризику навіть для здорових людей. Деякі види фізичних вправ ризикованіші, ніж інші, а деяких людей ризиковані всі фізичні вправи. Те саме стосується дієти. Деякі дієтичні рекомендації корисні більшості людей, але потенційно небезпечні інших.
Вправи, надані Mindly, призначені виключно для освітніх та розважальних цілей і не повинні інтерпретуватись як рекомендація конкретного плану лікування, продукту або курсу дій. Вправи не позбавлені ризиків, і ця чи інша програма вправ може призвести до травми. Вони включають, але не обмежуються: ризик отримання травми, загострення вже існуючого захворювання, несприятливі наслідки перенапруги, такі як м`язова напруга, аномальний кров`яний тиск, непритомність, порушення серцебиття та дуже рідкісні випадки серцевого нападу. Щоб зменшити ризик отримання травми, перед початком цієї або будь-якої іншої програми вправ, будь ласка, проконсультуйтеся з медичним працівником для призначення відповідних вправ та запобіжних заходів. Подані інструкції та поради в жодному разі не замінюють консультацію лікаря. Mindly відмовляється від будь-якої відповідальності, пов`язаної з цією програмою. Як і у випадку з будь-якою програмою вправ, якщо у будь-який момент тренування ви відчуєте непритомність, запаморочення або фізичний дискомфорт, вам слід негайно припинити заняття та проконсультуватися з лікарем.
<br/>
Розкриття юридичної інформації
<br/>
Матеріали, будь-які коментарі або інформація, надані Mindly, призначені виключно для освітніх цілей, і ніщо з переданого чи наданого не повинно розглядатися як юридична, бухгалтерська чи податкова консультація. Ви несете відповідальність за будь-які дії, які ви можете здійснити з інформацією, отриманою від Mindly. Відвідуючи та використовуючи цей сайт/додаток, ви визнаєте та погоджуєтесь з тим, що вас оцінив кваліфікований експерт у галузі права (тобто ваш адвокат), який дав вам згоду на участь у будь-якій юридичній діяльності. Будь ласка, звертайтесь до свого адвоката, бухгалтера або фахівця з оподаткування з будь-якими конкретними питаннями юридичного, бухгалтерського чи податкового характеру, пов`язаними з наданою інформацією.
<br/>
Розкриття фінансової інформації
<br/>
Валові продажі товарів – це показник, що не відноситься до GAAP. Ми використовуємо його для вираження загального попиту на всіх наших веб-сайтах та магазинах. Цей показник вимірює доларову вартість замовлення, розміщеного протягом року, до нарахування певних статей, таких як повернення, та ігнорує певні тимчасові відсічення, які потрібні GAAP для цілей визнання виручки. Якби ми були публічною компанією, нам довелося б звіряти валові продажі товарів з найближчим показником GAAP (чисті продажі), але зараз ми є приватною компанією, тому показник валових продажів товарів слід розглядати просто як цікаве число, яким ми хочемо поділитися з нашими друзями.
Даний документ містить прогнозні заяви, які пов`язані з ризиками та невизначеностями, а також припущеннями, які, якщо вони колись матеріалізуються або виявляться невірними, можуть призвести до того, що результати істотно відрізнятимуться від тих, що виражаються або маються на увазі в прогнозних заявах і припущеннях. Ці ризики та невизначеності включають, але не обмежуються ними, ризик уповільнення економічного зростання, ризик надмірних або недостатніх покупок, ризик того, що споживачі не будуть здійснювати онлайн-покупки на нашому сайті в очікуваному нами об`ємі, ризик нестачі постачальників, ризик нової чи зростаючої конкуренції , ризик природних чи інших катастроф, які впливають виконання наших історичних операцій чи веб-серверів, і навіть ризик того, що світу взагалі прийде кінець. Усі заяви, крім заяв про історичні факти, є заявами, які можуть вважатися заявами прогнозного характеру, включаючи заяви про очікування чи переконання; а також будь-які заяви про припущення, що лежать в основі будь-якої з вищезазначених заяв. Mindly не бере на себе жодних зобов`язань і не має наміру оновлювати ці прогнозні заяви.
<br/>Розкриття інформації про освіту
<br/>
Будь-яка інформація, надана компанією Mindly, призначена виключно для освітніх цілей і не повинна інтерпретуватись як рекомендація конкретного плану лікування, продукту або курсу дій. Mindly є дистриб`ютором, а не видавцем інформації, що надається третіми особами; у зв`язку з цим Mindly не здійснює редакційний контроль над такою інформацією та не дає жодних гарантій чи заяв щодо точності, надійності чи актуальності будь-якої інформації чи освітньої інформації, що надається через Mindly або доступною через Mindly. Не обмежуючи вищезазначене, Mindly спеціально відмовляється від усіх гарантій та заяв щодо будь-якого контенту, що передається на Mindly або у зв`язку з Mindly, або на сайтах, які можуть з`являтися як посилання на Mindly, або в продуктах, що надаються як частина Mindly або іншим чином пов`язаних з Mindly. Жодні усні поради чи письмова інформація, надана компанією Mindly або будь-якими її філіями, співробітниками, посадовими особами, директорами, агентами тощо, не створюють гарантій.
<br/>
Розкриття інформації про свідчення
<br/>
Будь-які відгуки, представлені на цій платформі, є думкою тих, хто їх надає. На інформацію, наведену у відгуках, не слід покладатися для прогнозування результатів у конкретній ситуації. Результати, які ви отримаєте, будуть залежати від багатьох факторів, включаючи, але не обмежуючись, рівнем вашої особистої відповідальності, прихильності та здібностей, а також від тих факторів, які ви та/або Mindly не можете передбачити. Ми надаватимемо чесні відгуки нашим відвідувачам незалежно від будь-яких знижок. Будь-який продукт чи послуга, які ми тестуємо, є індивідуальним досвідом, що відображає реальний досвід життя. Відгуки можуть бути представлені в аудіо-, текстовому чи відеоформаті та не обов`язково є репрезентативними для всіх, хто користується нашими продуктами та/або послугами. Mindly не гарантує таких самих результатів, як у відгуках, представлених на нашій платформі. Відгуки, представлені на Mindly, відносяться до осіб, які їх написали, і не можуть свідчити про майбутні успіхи інших осіб. Будь ласка, не соромтеся звертатися до нас, якщо ви хочете дізнатися більше про відгуки, знижки або будь-які продукти/послуги, які ми розглядаємо.
<br/>Ваша згода<br/>
Ми оновили Відмову від відповідальності, щоб надати вам повну прозорість щодо того, що встановлюється, коли ви відвідуєте наш сайт і як це використовується. Використовуючи наш сайт/додаток, реєструючи обліковий запис або здійснюючи покупку, ви цим погоджуєтесь з нашою Відмовою від відповідальності та приймаєте його умови.
Зміни у нашій Відмові від відповідальності
Якщо ми оновимо, змінимо або внесемо будь-які зміни до цього документа, щоб він точно відображав наші Послуги та політику. Якщо інше не потрібне згідно із законом, ці зміни будуть на видному місці опубліковані тут. Тоді, якщо ви продовжите користуватися Сервісом, ви будете пов`язані з оновленою Відмовою від відповідальності. Якщо ви не бажаєте погоджуватися з цією або будь-якою оновленою Відмовою, ви можете видалити свій обліковий запис.
<br/>Зв`язатися з нами<br/>
Не роздумуйте, якщо у вас виникли питання щодо цієї Відмови від відповідальності, зв`яжіться з нами.
Електронна пошта: support@mindlyspace.com
            </p>
          </section>      
        </div>             
      </div>
    <Footer />
    </>
  );
};

export default DisclaimerPage;
