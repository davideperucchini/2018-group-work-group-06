![](Images/Slide-Title.png)

<img width=100% src="Images/Teaser.gif">

## Contents
- [Project Idea](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#project-idea--)
- [The research](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#the-research--)
- [Design challenges](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#design-challenges--)
  * [Architecture](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#architecture--)
  * [Visuals](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#visuals--)
  * [Sounds](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#sounds--)
  * [Interactions](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#interactions--)
- [Code challenges](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#code-challenges--)
- [References](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#references--)
- [Credits](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#credits--)
- [Team members](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#team-members--)
- [Course](https://github.com/drawwithcode/2018-group-work-group-06/blob/master/README.md#course--)

![](Images/Slide-Skyline.png)
## Project Idea
**Have you ever wondered what blind people dream?**

If you have never seen anything in your life, you'd dream with your hearing, your smell and your touch.

The aim of the project is to provide a **blind person dream experience**.
We designed for the smartphone, because it allows to exploit different and interesting interactions. 

First, the user will move within a **maze** to get to the goal. The only **clues** that will have will be **made up of sounds**. Depending on the **origin of the sound, the user must turn** and, keeping the screen pressed, proceed forward until a new sound indicates the new road.

We have chosen to contextualize the **journey in a city**, in an attempt to return the most recurring nightmare of the blind: **to lose your guide dog**. 

Among all the sounds of the city the user will therefore be forced to distinguish the **barking of the dog**, paying attention to everything that surrounds it: bicycles, passers-by and cars.
Initially we thought to create a creepy sound experience that could be easily linked to a nightmare. We later abandoned the idea to avoid ridiculing the experience, encouraging an **audio editing as truthful as possible**.

[![](http://img.youtube.com/vi/f3IDrRBufWs/0.jpg)](http://www.youtube.com/watch?v=f3IDrRBufWs)

## The research

To better understand the context in which we experimented, we went to [Dialogo nel Buio](http://www.dialogonelbuio.org/index.php/it/), a **sensorial experience** managed by the Istituto dei Ciechi in Milan. It’s important to note that Dialogo nel Buio does not want to provide a simulation of blindness but rather to **show new ways of experiencing reality**. After the visit we gathered several reflections. In particular, we were accompanied by **anxiety, insecurity and bewilderment**.

The research then moved on to the data.

From a [Danish research](http://sciencenordic.com/blind-people-have-four-times-more-nightmares-sighted-people) it emerged that, leaving aside the sensorial stimuli, **there are no particular differences** in the themes, emotions and interactions between the dreams of a person and a blind one.

The difference lies rather in an important detail: **the blind have many more nightmares, around 25% of dreams against 7% for sighted people**. The high percentage can be explained by the (hypothesized) reason that leads humans to have nightmares. In fact, nightmares would serve to **test ourselves against the dangers** that can be found in real life, to test our reactions. In a *visual* world the blind run more danger and in fact often find themselves dreaming of getting lost, being hit by a car, falling or not finding the guide dog anymore.

The percentages related to the use of every sense in a dream for those who are blind from birth are:
- taste → 26%
- smell → 40%
- hearing → 93%
- touch → 67%

![](Images/Slide-Research.png)

## Design challenges
 
### Architecture 
[grafico]
 
### Visuals 
Visual choices focused on the **initial part of the homepage and instructions**.

<img align="left" src="Images/Slide-Visuals.png">

The homepage is a **sliding onepage** that opens with the animated *Dark Dreams* logo. _Coming down from the clouds_ you get to the city and the bedroom, while the purpose of Dark Dreams is being told and it begins to be set through a story. Every written text is read to be accessible by anyone.

Instruction pages follow, accompanied by drawings to be more immediate. 
The actual experience starts from the last page.
 
In addition to the initial animation, each button has a visual feedback.
 
### Sounds
 <img align="right" width="150" src="Images/Slide-Dog.png">

Due to its nature, the project is mainly developed on audio.

The first challenge was to choose sounds that could immerse the user in the city atmosphere and, at the same time, be distinguishable and provide feedback. In addition to the nature of sound itself, it was paid attention to its volume.
To be used by anyone and to involve the user more, each text is associated with the voice over. The choice of the warm, feminine and persuasive voice was carried forward keeping in mind the tone of the project.
 
Another point that has been addressed is the difficulty of the experience. To increase the difficulty without making it impossible to get to the end, the project was tested with several people to receive the feedback needed to calibrate the sounds and the path.
 
Initially it was possible to be hit by an obstacle and die, forcing the user to start over. Subsequently the death was removed to encourage an experience as continuous as possible. Instead of being hit, the obstacle brakes and the phone vibrates.


### Interactions  <img align="right" width="150" src="Images/Interactions.gif">

There are two main interactions: **rotation** and **tap**. They have been chosen to make the experience **as immersive as possible**.

The first thing to do to proceed in the labyrinth is to **turn in the direction of the sound**.
 
To be able to go on, you have to **tap on the screen**.
 
When you get very close to an obstacle, however, **the cell phone vibrates**, trying to simulate the touch.

## Code challenges 

### The homepage 
To develop the initial part of the homepage, HTML and CSS were used.
The main difficulty was managing responsiveness, difficulty managed thanks to the flexboxes.

``` css
.flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 95vh;
        width: 100%;
        padding-top: 10%;
        margin-left: 0;
        margin-right: 0;
      }
```
 
Another difficult point was the animation of the buttons, initially designed from the png. In order to be freer in management, they were finally designed directly in CSS.

``` css
  .typewriter  {
       overflow: hidden; 
       border-right: .15em solid; 
       white-space: nowrap; 
       margin: 0 auto;
       animation:
       typing 3.5s steps(20, end) infinite,
       blink-caret .75s step-end infinite;
     }

     /* The typing effect */
     @keyframes typing {
       from { width: 0 }
       to { width: 100% }
     }
     /* The typewriter cursor effect */
     @keyframes blink-caret {
       from, to { border-color: transparent }
       50% { border-color: #fcf1e3; }
     }
     
      .play-btn {
        margin-top: 5vh;
        margin-bottom: 2vh;
        width: 50px;
        height: 50px;
        background: radial-gradient(
          circle,
          rgba(23, 13, 51, 1) 0%,
          rgba(38, 22, 82, 1) 52%,
          rgba(60, 34, 109, 1) 100%
        );
        border-radius: 50%;
        position: relative;
        display: block;
        box-shadow: 0px 0px 25px 3px rgba(38, 22, 82, 1);
      }

      /* triangle */
      .play-btn::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateX(-40%) translateY(-50%);
        transform-origin: center center;
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 20px solid #fff;
        z-index: 100;
        transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      /* pulse wave */
      .play-btn:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        animation-delay: 0s;
        animation: pulsate1 2s;
        animation-direction: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: steps;
        opacity: 1;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.75);
        top: -11%;
        left: -11%;
        background: rgba(198, 16, 0, 0);
      }

      @keyframes pulsate1 {
        0% {
          transform: scale(0.6);
          opacity: 1;
          box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75),
            0px 0px 25px 10px rgba(255, 255, 255, 0.75);
        }
        100% {
          transform: scale(1);
          opacity: 0;
          box-shadow: none;
        }
      }
 ```
     
     
     
     
### The experience



## References 

## Credits 


![](Images/Slide-Skyline.png)

## Team members 
*Dark Dreams* was developed by:
- Federica Prunotto
- Ennio Sorrentino
- Livia Stevenin
- Irene Zanardi
 
## Course 
[Creative Coding 2018/2019](https://drawwithcode.github.io/2018/)

Politecnico di Milano - Scuola del Design

Faculty: Michele Mauri, Tommaso Elli



