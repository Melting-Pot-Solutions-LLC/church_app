

export class QuestionsService {  

    getTodaysQuestion(day)
    {
      return this.questions.find(function(element) {
        return element.date == day;
      });
    };

    getQuestionsByMonth2(month: number)
    {
      return this.questions.filter(function(filteredElement) {
        return month == (new Date(filteredElement.date)).getMonth();
      }).map(function(mappedElement) {
        return {
          'date': mappedElement.date,
          'date_month': (new Date(mappedElement.date)).toLocaleString('en-us', { month: "short" }).toUpperCase(),
          // 'date_day': ("0" + (new Date(mappedElement.date)).getDate()).slice(-2),
          'date_day': mappedElement.date.slice(-2),
          'text': mappedElement.title
        };
      })
      // .sort(function(a,b) {
      //   return (a.date_day > b.date_day) ? 1 : ((b.date_day > a.date_day) ? -1 : 0);
      // })
      ;
    };

    getQuestionsByMonth(month: number)
    {
    switch (month) {
			case 0: // JAN
        return this.questions.slice(0, 11).map(function(mappedElement) {
          return {
            'date': mappedElement.date,
            'date_month': "JAN",
            // 'date_month': (new Date(mappedElement.date)).toLocaleString('en-us', { month: "short" }).toUpperCase(),
            // 'date_day': ("0" + (new Date(mappedElement.date)).getDate()).slice(-2),
            'date_day': mappedElement.date.slice(-2),
            'text': mappedElement.title
          };
        });
				// break;
        
        case 1:
         // FEB
        return this.questions.slice(11, 39).map(function(mappedElement) {
          return {
            'date': mappedElement.date,
            // 'date_month': (new Date(mappedElement.date)).toLocaleString('en-us', { month: "short" }).toUpperCase(),
            'date_month': "FEB",
            // 'date_day': ("0" + (new Date(mappedElement.date)).getDate()).slice(-2),
            'date_day': mappedElement.date.slice(-2),
            'text': mappedElement.title
          };
        });
				// break;
        
        case 2:
        // MARCH
        return this.questions.slice(39, 70).map(function(mappedElement) {
          return {
            'date': mappedElement.date,
            // 'date_month': (new Date(mappedElement.date)).toLocaleString('en-us', { month: "short" }).toUpperCase(),
            'date_month': "MAR",
            // 'date_day': ("0" + (new Date(mappedElement.date)).getDate()).slice(-2),
            'date_day': mappedElement.date.slice(-2),
            'text': mappedElement.title
          };
        });
				// break;
        
        case 3:
        
        return this.questions.slice(70, 100).map(function(mappedElement) {
          return {
            'date': mappedElement.date,
            'date_month': "APR",
            // 'date_month': (new Date(mappedElement.date)).toLocaleString('en-us', { month: "short" }).toUpperCase(),
            // 'date_day': ("0" + (new Date(mappedElement.date)).getDate()).slice(-2),
            'date_day': mappedElement.date.slice(-2),
            'text': mappedElement.title
          };
        });
				// break;
        
        case 4:
        
        return this.questions.slice(100).map(function(mappedElement) {
          return {
            'date': mappedElement.date,
            'date_month': "MAY",
            // 'date_month': (new Date(mappedElement.date)).toLocaleString('en-us', { month: "short" }).toUpperCase(),
            // 'date_day': ("0" + (new Date(mappedElement.date)).getDate()).slice(-2),
            'date_day': mappedElement.date.slice(-2),
            'text': mappedElement.title
          };
        });
				// break;
		
			default:
				break;
    }
    
  }

  monthNumberToString(number)
  {
    switch("")
    {

    }
  }
    
      questions = 
      [
        {
          "id": 1,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-21",
          "content": "<p>Welcome to the beginning of what we pray will be a fruitful and life-giving journey.</p>\n<p>The goal of this app is for it to become a daily practice as we examine our lives and our habits&mdash;our personal &ldquo;liturgies&rdquo;&mdash;over the next few months.</p>\n<p>This series will be broken into sections of 3-4 weeks, with each section focused on helping us fight a particular issue that is keeping us from living the type of life God has designed for us (apathy, distraction, self-reliance, cynicism, and self-absorption).</p>\n<p>Each section will have a specific challenge to help us fight for spiritual health. Most sections will have the same challenge throughout the weeks, while some will have slight modifications each week.</p>\n<p>Our first challenge is to fight apathy by journaling. We want to pay attention to our lives and train ourselves to more fully engage with God by the simple act of journaling in a Godward way. You can save your content here on the app, or you can use a paper journal and simply use this as a delivery device/progress tracker.&nbsp;</p>\n<p>Lastly, you may be wondering, &ldquo;Why an app?&rdquo; We have several reasons, but the following quote sums up the reasoning nicely:</p>\n<p>&ldquo;We are continually being nudged by our devices toward a set of choices. The question is whether those choices are leading us to the life we actually want. I want a life of conversation and friendship, not distraction and entertainment; but every day, many times a day, I&rsquo;m nudged in the wrong direction. One key part of the art of living faithfully with technology is setting up better nudges for ourselves.&rdquo;</p>\n<p><strong>&mdash;Andy Crouch, <em>The Tech-Wise Family</em></strong></p>\n<p>We pray for this app to invade the consuming space that smartphones have taken in our lives, and for it to be a healthy &ldquo;nudge&rdquo; for you at least once a day (if not multiple times a day) to help you examine your daily life. We pray that it will encourage growth by creating a structure that helps other habits to flourish.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>How do you know when you are doing well spiritually in your day-to-day life? What are the indicators that your relationship with God is healthy?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How can you tell if you are not doing well spiritually in your day-to-day life? What are the indicators that your relationship with God is stale or dry?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Based on your two previous answers, how are you doing spiritually this week? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where do you feel like you are thriving in life right now? Where do you feel like you are struggling?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever consistently journaled before this? If so, what has your experience been? If not, how open are you to trying this and what might you get out of it? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 2,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-22",
          "content": "<p>Blessed is the man who trusts in the LORD, whose trust is the LORD. He is like a tree planted by water, that sends out its roots by the stream, and does not fear when heat comes, for its leaves remain green, and is not anxious in the year of drought, for it does not cease to bear fruit.</p>\n<p><strong>Jeremiah 17:7-8</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Open up your Bible and read John 15:1-11. What is the type of relationship Jesus says we are made to have with God, and what does verse 11 say the end result will be? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In what ways do you see spiritual vitality—or spiritual “aliveness”—in your life? How are you different from the person you used to be when you did not know or relate to God in the way you do now?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where do you see a lack of spiritual vitality and joy in your life? In what ways do you feel more like the “withered branch” in John 15 than a tree whose roots are planted by a stream?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How are you feeling today? Happy, sad, thankful, discouraged, angry, frustrated? Can you identify what is causing you to feel that way?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What happened today (or this week) that you might want to remember years from now? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 3,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-23",
          "content": "<p>&ldquo;You will either operate out of overflow or out of emptiness. You will enter relationships seeking to fill or drain. You&rsquo;ll come in as a person who has been loved well and has things to offer, or as a depleted, deficient person.&rdquo;</p>\n<p><strong>&mdash;Larry Wagner</strong></p>\n<p><strong><u>Apathy</u></strong>: not caring about things God created you to care about.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Think about your primary relationships (your family, friends, LifeGroup, neighbors, coworkers, etc.). In which relationships do you primarily interact as a person who’s been loved and filled by God? Are there any relationships where you more often interact as a depleted, deficient person looking to fill up some emptiness in your life?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When you feel drained and are tempted to think that you have nothing to offer to others, how might that be more so a spiritual problem than an exhaustion problem? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where do you see evidence of apathy in your life? In what ways is your life marked by apathetic disinterest or exhaustion, and what are any causes you can trace? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Think of a time recently that you felt apathetic about something you knew God wanted you to do. What did you do? Did you do it anyway and ask God to change your heart, or did you just not do it?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you confused about or trying to figure out in your life right now?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 4,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-24",
          "content": "<p>&ldquo;Everyday all around us we are caught up in rituals, routines, or &lsquo;liturgies&rsquo; that try to tell us who we are, what we are made for, and what will satisfy. Taking assessment of our rituals, will often tell us what we actually love.&rdquo;</p>\n<p><strong>&mdash;James K.A. Smith, <em>You Are What You Love</em></strong></p>\n<p><strong><u>Distraction</u></strong>: being unable to focus on God and others because your attention is taken by less important things.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>When you look at your life, what are things that distract you from living the fulfilled and vibrant life God designed you to live in connection to him?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Think about your everyday routines or “liturgies.” Other than your obligations like work/school, sleep, etc., what are the things you do that take up the majority of your time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What activities help you feel most aware of and in tune with God? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How often are you doing those things? How are you doing at prioritizing things that help you focus on God in your life right now? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is God doing in your life right now? What is he teaching you? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 5,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-25",
          "content": "<p>\"When human conduct is not rooted in reliance on God, it is part of the very rebellion that ruins the world.\"</p>\n<p><strong>&mdash;John Piper </strong></p>\n<p><strong><u>Self-reliance</u></strong>: living your day-to-day life depending primarily on your own strength and resources.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>What is your functional day-to-day awareness of your need for God? On a scale from 1 to 10, if 1 is “very blind to it” and 10 is “constantly aware,” where would you rank yourself and why?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What events or circumstances in your life have made you the most aware that you can do nothing without God? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When you feel stressed, anxious, empty or depleted, what do you typically turn to? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If the analogy in John 15 that Jesus is the vine and we are the branches is true, what will be the practical effect of a daily existence that does not rely on God? What forms might this spiritual deadness and depletion take in your life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What Scripture have you been reading, and what has God been teaching you through it?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 6,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-26",
          "content": "<p>The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.</p>\n<p><strong>John 10:10</strong>&nbsp;</p>\n<p><strong><u>Cynicism</u></strong>: a posture of skepticism that leads you to doubt God&rsquo;s presence and activity in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>In what areas of your life are you most tempted to be skeptical of God’s goodness, character, or presence? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever prayed for something and it happened, but you thought “That probably would have happened anyway.” If so, what does this reveal about the posture of your heart toward God? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When you read verses like John 10:10 where Jesus says he came to give us an abundant life, are you tempted to be cynical about that? Do you struggle to believe you could really have a day-to-day existence that is vibrantly filled by connection to God? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How would you describe your prayer life in the past 6 months?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What good things have been happening in your life? What are you are grateful for as you zoom out past any frustrations & stress?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 7,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-27",
          "content": "<p>&ldquo;Life in general can carry on within limits even though some of its specific needs are not adequately met. A plant or animal without the appropriate food, light, or space may lead a weakened and deformed existence, but one that is still a life. Human life is not what it could be, though it is still here, still going on. But the question is, what is human life being cut off from to leave it in such a sad and depleted condition?&rdquo;</p>\n<p>&mdash;<strong>Dallas Willard</strong>, <strong><em>The Spirit of the Disciplines</em></strong></p>\n<p>&nbsp;</p>\n<p><strong><u>Self-absorption</u></strong>: being preoccupied with your thoughts, feelings, desires, and concerns above all else.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Where do you see self-absorption the most in your life?  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who would you say is likely the most self-absorbed person that you know? Are they happy? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In what areas are you the most frustrated and disappointed in your life? Could any of that frustration and disappointment come from a false belief that life is primarily about you? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Think back to the most recent life-giving spiritual conversation you had with someone. What did you talk about? Why was it meaningful to you, and what did you learn? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who has been on your mind a lot recently? Take a few moments and pray for that person, and jot down anything specific you are praying. </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 8,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-28",
          "content": "<p>&ldquo;The crucible of our formation is in the monotony of our daily routines.&rdquo;</p>\n<p><strong>&mdash;Tish Harrison Warren, <em>Liturgy of the Ordinary</em></strong></p>\n<p>If the things you do do things do you, it is wise to start by taking stock of the things you actually do.</p>\n<p>Take the following example habits (add others if you can), and categorize them into the appropriate category below.</p>\n<ul>\n<li>Read the Bible&nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Watch TV &nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Read a book&nbsp;&nbsp; &nbsp;</li>\n<li>Social media&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Quality prayer time</li>\n<li>Consume alcohol</li>\n<li>Check email</li>\n<li>Listen to music&nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Hobbies</li>\n<li>Zoning out</li>\n<li>Quality conversation &nbsp;&nbsp;</li>\n<li>Physical activity</li>\n<li>Purposeless phone scrolling&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Hospitality</li>\n<li>Serving others&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Quality time with kids&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>\n<li>Intentional sabbath</li>\n<li>Fasting</li>\n<li>Sinful habits</li>\n<li>Time wasters</li>\n<li>Eating when not hungry</li>\n<li>Quality time with community</li>\n<li>Video games</li>\n<li>Listen to sermons</li>\n<li>Take a walk</li>\n<li>Quiet time</li>\n<li>Surf the internet</li>\n<li>Follow sports/interests</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Category #1: Things I Do Often (multiple times per day to multiple times per week)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Category #2: Things I Do Sometimes (a few times per week)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Category #3: Things I Rarely Do (a few times a month or less)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What insights did you gain into your life as you categorized your habits and tendencies? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 9,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-29",
          "content": "<p>For if you live according to the flesh you will die, but if by the Spirit you put to death the deeds of the body, you will live.</p>\n<p><strong>Romans 8:13</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Take a look back at the habits you categorized yesterday. Out of all your consistent habits, which ones are the most enriching for you? Which ones help spur your affections for Jesus? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Out of all your habits, which ones are the least enriching? Which ones do not contribute to your health and vitality as a Christian? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are the major highlights from your past week?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are the major frustrations from your past week?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you been regularly approaching God this week with your highlights (in gratitude) and with your frustrations (in prayer)? If not, take some time to do that now.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 10,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-30",
          "content": "<p>Do not be deceived: God is not mocked, for whatever one sows, that will he also reap. For the one who sows to his own flesh will from the flesh reap corruption, but the one who sows to the Spirit will from the Spirit reap eternal life.</p>\n<p><strong>Galatians 6:7-8</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Think about the time that has passed between when you became a Christian and now. What has your trajectory of spiritual growth looked like over that time? In what ways have you grown, and in what ways have you been stagnant over that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever become frustrated or bitter with God about a lack of spiritual growth in an area of your life? (As if he wasn’t doing what was necessary for your growth.) If so, is this a biblically sound frustration based on Galatians 6:7-8? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In what ways are you happy with the type of person you have become up until this point in your life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In what ways are you unhappy with the type of person you have become up until this point in your life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Review your list of categorized habits from Sunday once again. Imagine that you continue to repeat your current habits for the next 10 years, keeping the same trajectory and patterns you have now. Do you like the person you will have become in 10 years? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 11,
          "title": "Fight apathy by journaling.",
          "date": "2018-01-31",
          "content": "<p>&ldquo;What I in my weakness see as another monotonous day in a string of days, God sees as a singular gift...God is forming us into a new people. And the place of that formation is in the small moments of today.&rdquo;</p>\n<p><strong> &mdash;Tish Harrison Warren,<em> Liturgy of the Ordinary</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>What is your favorite thing that happened today? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Do you have anything you want to keep a secret right now? If so, what actions would God call you to take?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are you creating the impression with others that you are doing better than you actually are? If so, how might you need to remedy that?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are there certain people in your life that almost serve as a litmus test for how you are doing with God? (If you are thriving spiritually you have life and energy and patience for them, but if you are not you have the opposite.) Who are those people for you? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a few minutes praying for that person (or those people). Ask God to help you walk closely with him and produce the spiritual fruit you need to love them well. Jot down anything specific he brings to mind that is helpful. </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 12,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-01",
          "content": "<p>&ldquo;Your daily routine has a worldview. It orients your body to the world and primes you to experience it in specific ways.&rdquo;</p>\n<p><strong>&mdash;Mike Cosper, <em>Recapture the Wonder</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Think about what you do on a typical Thursday. If a stranger were to come observe your life for that day, what might he or she assume is your worldview based on your daily routine? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are you prayerfully asking God how you should spend your free time, or mostly just doing what you want?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How might your free time look different if you more consistently asked God how you should spend it? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>At the end of a week, how do you define if the week was a success? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When was the last time you confessed specific sin issues to God and to other believers in your life?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 13,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-02",
          "content": "<p>&ldquo;As our choices settle into character traits, they are &lsquo;farmed out&rsquo; to our body, where they occur more or less automatically without us having to think about what we are doing.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Renovation of the Heart in Daily Practice</em></strong></p>\n<p>&nbsp;</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Do you notice any areas of your life where your body just does something more or less automatically, without you feeling like you made a conscious decision to do it?\n</p><p><strong>Potential examples:</strong></p>\n<ul>\n<li>Do you unthinkingly turn on the TV when you get home?</li>\n<li>When someone else with you pulls out their phone to check it, do you do the same?</li>\n<li>Do you eat compulsively when faced with a particular circumstance?</li>\n<li>Do your legs jitter anxiously when you sit down at a desk to work?</li>\n<li>When you get stopped at a red light, do you immediately get out your phone?</li>\n<li>Is there something you immediately check or do when you wake up in the morning?</li>\n<li>Any other addictions that would fall into this category?</li>\n</ul>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Assuming you noticed any automatic or unthinking tendencies in your life, do you think those habits are essentially harmless? Or might there be a deeper issue underneath any of them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If any of them could have a harmful or less-than-beneficial foundation, what were the choices you made early on that allowed those things to “settle into character traits”? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is hard in your life right now? What are sources of stress, fear, anger or disappointment? (Spend a few minutes talking to God about these things.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is going well in your life right now? Where are you encouraged or grateful? (Spend a few minutes thanking God for these things.) </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 14,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-03",
          "content": "<p>&ldquo;Raking is easy, but all you get is leaves. Digging is hard, but you might find diamonds.&rdquo;</p>\n<p><strong>&mdash;John Piper</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>How do you feel about intentionally digging into your life each day? Is it encouraging, discouraging, easy, difficult? Why do you think it is that for you? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Has the Holy Spirit been impressing anything on you recently that you’ve been avoiding or resisting? If so, stop and pray about it right now. What steps do you need to take to repent and obey the Spirit’s leading? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>It has been said that people in the following age ranges generally are trying to answer these basic philosophical questions about their lives. Is the question in your age range accurate for you? Why or why not?</p>\n\n<p>Teens—Who am I?<br />20s—Do I matter?<br /> 30s—How do I do all this?<br /> 40s—Is this it?<br /> 50s—Can I keep going?<br /> 60s—Am I obsolete?<br /> 70s on—Was it worth it?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What happened today (or this week) that you might want to remember years from now? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend some time thinking about the type of person you’d like to be 20 years from now. What are some adjectives or characteristics that describe the kind of person you want to be? How is that person different than the person you are today? Write down anything that comes to mind below.</p>\n\n<p>Spend some time asking the Holy Spirit to examine, purify and direct those goals, and ask him to set you on a path to become that type of person. </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 15,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-04",
          "content": "<p>By this we may be sure that we are in him: whoever says he abides in him ought to walk in the same way in which he walked.</p>\n<p><strong>1 John 2:5-6</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>How are you feeling today? Happy, sad, thankful, discouraged, angry, frustrated? Can you identify what is causing you to feel that way?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What has been your pattern of reading Scripture? Have you struggled to make spending time in God's Word a meaningful part of your life?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How would you describe your prayer life since becoming a Christian? Regular, inconsistent, stagnant,\n thriving, etc.?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What was the most spiritually healthy season in your life? What did  you do to cultivate your relationship with God during that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Think about where you might be in life 30 years from now. Can you think of anything that future-you might look back and wish present-you would have done differently?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 16,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-05",
          "content": "<p>What you have learned and received and heard and seen in me&mdash;practice these things, and the God of peace will be with you.</p>\n<p><strong>Philippians 4:9</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Based on what you know about the life of Jesus, Paul, and other disciples, what are the spiritual disciplines that they consistently practiced? What are things they did to cultivate their relationship with God and abide in him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Out of those, which ones do you consistently practice, and which do you never (or almost never) practice? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How reasonable is it for you to expect the same level of spiritual joy and fullness that they walked in if your practices do not match theirs? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If by not regularly reading Scripture or praying you are actually becoming a person who does not read Scripture or pray, what kind of person are you currently becoming? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are the things in your life that you are putting the most effort into right now? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 17,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-06",
          "content": "<p>&ldquo;A baseball player who expects to excel in the game without adequate exercise of his body is no more ridiculous than the Christian who hopes to be able to act in the manner of Christ when put to the test without the appropriate exercise in godly living.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>The Spirit of the Disciplines</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Where are you most frustrated by your lack of spiritual growth? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In what ways might your areas of frustration and lacking growth be a result of you not structuring your life to get what you want? (Where the things you are not doing are doing things to you.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What circumstances in your life have “squeezed” you or put you to the test recently? What have they revealed about the current nature of your heart and spiritual health?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Is there anything you are confused about or trying to figure out in life right now? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who has been on your mind a lot recently? Take a few moments and pray for that person, and jot down anything specific you are praying.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 18,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-07",
          "content": "<p>&ldquo;How I spend this ordinary day in Christ is how I will spend my Christian life.&rdquo;</p>\n<p><strong>&mdash;Tish Harrison Warren,<em> Liturgy of the Ordinary</em></strong></p>\n",
          "questions": [
            {
              "id": "",
              "title": "<p>Look at the pattern of your life. When confronted with possible areas of needed growth, do any of the following obstacles tend to keep you from enacting change?</p>\n\n<p><strong>Reasons we don&rsquo;t change:</strong></p>\n<ul>\n<li>I&rsquo;ll change one day, but not today. Today is just ordinary.</li>\n<li>I shouldn&rsquo;t need help and structure to change. It should be natural.</li>\n<li>I&rsquo;ll just wait and an epiphany will suddenly change my life.</li>\n<li>I&rsquo;m really not that bad, compared to _______.</li>\n<li>I don&rsquo;t want to be legalistic.</li>\n</ul>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever confused legalism and healthy discipline, such that a fear of being legalistic kept you from instituting healthy practices?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are there any practical changes you need to make to re-prioritize how you spend an “ordinary day in Christ?”</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What do you need the Holy Spirit’s help with this week? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where are you growing spiritually? Stop and spend a few moments thanking God for that growth. </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 19,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-08",
          "content": "<p>&ldquo;One can receive accolades for preaching Jesus, yet at the same time know very little about how to follow Jesus in the living rooms of their ordinary lives.\"</p>\n<p><strong>&mdash;Zack Eswine, <em>The Imperfect Pastor</em></strong></p>\n<p>&nbsp;</p>\n<p>The test Paul gives us for how we are &ldquo;walking in the Spirit&rdquo; is if the fruit of the Spirit is being produced in our lives (Galatians 5:16-25). The things he names as fruit of the Spirit are &ldquo;love, joy, peace, patience, kindness, goodness, gentleness, faithfulness, and self-control.&rdquo;</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Where do you see evidence of the fruit of the Spirit growing in your life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Which fruit of the Spirit seems to be more lacking in your life?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Is your personality (without the help of the Spirit) naturally inclined to be stronger or weaker at any of these? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What Scripture have you been reading, and what has God been teaching you through it?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where do you feel like you are thriving in life right now, and where do you feel like you are struggling? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 20,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-09",
          "content": "<p>&ldquo;The often unseen and unsung ways we spend our time are what form us. Our mundane moments, rooted in the communal practices of the church, shape us through habit and repetition, moment by passing moment, into people who spend their days and therefore their lives marked by God...The kind of spiritual life and disciplines needed to sustain the Christian life are quiet, repetitive, and ordinary.&rdquo;</p>\n<p><strong>&mdash;Tish Harrison Warren, <em>Liturgy of the Ordinary</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Participating in one particular Sunday Gathering or LifeGroup meeting may not feel life-changing, however— God shapes us over time profoundly through these ordinary practices. How has God shaped you over time by the communal practices of the church? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In a similar vein, spending time in Scripture or prayer today may not feel life-changing—you may not feel the immediate, tangible effects of it. But how has God shaped you as a person over time through these practices?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What kind of person would you become if you neglected these “quiet, repetitive, and ordinary” disciplines? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you doing to rest right now?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How can you tell the difference between beneficial rest and something that’s an escape (but isn’t rejuvenating)? What are some things that would fall into each of those categories for you? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 21,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-10",
          "content": "<p>&ldquo;We become the people we are by what we choose to do, again. There is no virtue without repetition.&rdquo;</p>\n<p><strong>&mdash;JR Vassar</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Do you typically view things that are repetitive positively or negatively? How has God used healthy repetition in your life to grow you spiritually? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What things are life-giving for you right now? What things are draining? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How often do you talk to God about things as you go throughout your daily life? If 1 is “almost never” and 10 is “pretty constantly,” where would you rank yourself? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you been regularly approaching God this week with your highlights (in gratitude) or with your frustrations (in prayer)? If not, take some time to do that now.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How are you doing spiritually this week?  </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 22,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-11",
          "content": "<p>&ldquo;We each carry in our minds a list of behaviors we label &lsquo;sinful,&rsquo; and it is understood that participating in these things can disrupt our experience of God&rsquo;s presence. But just because something isn&rsquo;t &lsquo;sinful&rsquo; doesn&rsquo;t mean it cannot be detrimental.&rdquo;</p>\n<p><strong>&mdash;Skye Jethani</strong></p>\n<p>&nbsp;</p>\n<p>Hebrews 12:1 instructs us to “lay aside every weight, and sin that clings so closely” so that we can run the race ahead of us with our eyes fixed on Jesus. Think about your habits and life rhythms (hobbies, TV shows, phone apps, eating/drinking patterns, etc.). Is there anything you enjoy, but if you’re honest it’s not spiritually helpful for you? </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Ask the Holy Spirit to reveal anything in your life that, although it may not be sinful, may be a “weight” that’s hindering your growth. Write down any things that come to mind. </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is it about these things that is unhelpful for you? How are they weighing you down? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If you consider that thing (or things) a “weight,” what would be the benefits of removing it from your life? What are your hesitations for doing so? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What Scripture have you been reading, and what is God teaching you through it? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What good things have been happening in your life? What are you grateful for?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 23,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-12",
          "content": "<p>&ldquo;More than any other discipline, fasting reveals the things that control us.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Are there any things in your life that you think you could never give up? Is this evidence that those things might control you in a negative way?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What situations or circumstances serve as triggers for you? What makes you feel insecure, dissatisfied or uncomfortable? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What do you typically turn to when you feel triggered in a negative way? What are your “adult pacifiers” that you run to for relief? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>This coming Wednesday the historic Christian tradition of Lent starts, where Christians choose to fast from something in their life until Easter to help focus their attention in a Godward way. Do you think it would be helpful to participate this year? If so, pray about what would be helpful to fast from.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Did anything happen today (or this week) that you want to remember years from now? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 24,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-13",
          "content": "<p>&ldquo;Reject anything that is producing an addiction in you.&rdquo;</p>\n<p>&mdash;<strong>Richard Foster</strong>, <strong><em>Celebration of Discipline</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Do you have anything in your life right now that is becoming an addiction? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you struggled with other addictions in the past? What effects did those have on you if so? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are you talking with God about your life as you go throughout your daily routine? If not, stop and spend a few minutes praying right now. </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Is there anything you are confused about or trying to figure out in life right now? Ask the Holy Spirit for clarity or direction on these things. </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who has been on your mind a lot recently? Take a few moments and pray for that person, and jot down anything specific you are praying.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 25,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-14",
          "content": "<p>&ldquo;Once you get used to telling yourself &lsquo;no&rsquo; in small things, it becomes easier to do so in larger things.&rdquo;</p>\n<p><strong>&mdash;Rod Dreher</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>The historic Christian tradition of Lent starts today. Did you decide to participate and fast from anything during this season? Why or why not? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever used fasting as an intentional means of cultivating your attention in a Godward way? If so, what has been your experience with that? If not, why not? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where do you feel like you are thriving in life right now, and where are you struggling? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Where are you being confronted with your inability in life right now? What do you need the Holy Spirit’s help with? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Has the Holy Spirit been impressing anything on you recently that you’ve been avoiding or resisting? If so, stop and pray right now. What steps do you need to take to repent and obey the Spirit’s leading? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 26,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-15",
          "content": "<p>&ldquo;All things are lawful for me,&rdquo; but not all things are helpful. &ldquo;All things are lawful for me,&rdquo; but I will not be dominated by anything.</p>\n<p><strong>1 Corinthians 6:12</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Are there any consistent issues, behaviors or patterns that feel like they have dominated your life in some way? (If so, spend some time asking God for help with these.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are some unhealthy things you’ve done in the last 5 years to escape from responsibility, fears or pressure? Have you done these things recently? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is coming up in your life that you are most looking forward to?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is coming up that you are not looking forward to, or maybe even dreading? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What Scripture have you been reading, and what has God been teaching you through it?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 27,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-16",
          "content": "<p>&ldquo;Our consumer society has done a remarkable thing. It has convinced us that our desires are immutable and undeniable; that we are defined by longings and are powerless to change or resist them.&rdquo;</p>\n<p><strong>&mdash;Skye Jethani</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>What desires have you had to say “no” to in order to follow Jesus and grow spiritually? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How is your diet and exercise right now? Do you have a lack of discipline in either of those areas that may be affecting you negatively in other areas? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How are you sleeping? Are there any issues with your sleep that you need to ask for God’s help with? Are there any patterns or behaviors you may need to change? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you doing to intentionally rest?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are the most life-giving things in your life right now? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 28,
          "title": "Fight apathy by journaling.",
          "date": "2018-02-17",
          "content": "<p>Keep your heart with all vigilance, for from it flow the springs of life.</p>\n<p><strong>Proverbs 4:23</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p>How are you feeling today? Happy, sad, thankful, discouraged, angry, frustrated? Can you identify what is causing you to feel that way?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If you decided to give up anything for Lent, how is that going? What has been challenging so far, and what has been rewarding? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If you’ve been keeping up with this app, you’ve now been journaling for 28 days. Have you noticed any changes that this practice has helped produce in you?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What have you learned about God or about yourself in the past 28 days?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you been regularly approaching God this week with your highlights (in gratitude) or with your frustrations (in prayer)? If not, take some time to do that now.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 29,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-18",
          "content": "<p>&ldquo;Try to pinpoint the last time you took a purposeless walk through the late spring breeze, when there was no itch in your hand to reach for a mobile device, and you felt like the wind and sky around you had nothing to disclose to you other than the vast and mysterious sympathy of existence itself. Was it 2007? Or as far back as 1997? Does just asking the question make you feel ill?&rdquo;</p>\n<p><strong>&mdash;Michael Brendan Dougherty</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for 1 hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the tech-free time feel? (Difficult, rejuvenating, stressful, boring, life-giving, etc.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When was the last circumstance or setting where you were so content and joyful that you forgot about checking your phone? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What was the most life-giving conversation you’ve had with someone recently? What did you talk about, and what made it life-giving? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 30,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-19",
          "content": "<p>&ldquo;Of course, something will not come up. But over the course of the next 90 minutes I will check my phone for texts, likes, and <em>New York Times </em>push alerts at every pang of boredom, anxiety, relaxation, satiety, frustration, or weariness. I will check it in the bathroom and when I return from the bathroom. I don&rsquo;t really enjoy this, but it <em>is </em>very interesting, even if some indignant and submerged part of my psyche moans that I am making myself dumber every time I look at it.&rdquo;</p>\n<p><strong>&mdash;Robinson Meyer</strong></p>\n\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for one hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the tech-free time feel? (Difficult, rejuvenating, stressful, boring, life-giving, etc.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How would you describe your relationship with your phone? (Healthy, Mostly healthy, I’m too addicted, Would life be worth living without it?, etc.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are your current boundaries with your phone (if any)? Do you ever turn it off or spend quality time away from it (before this challenge)?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 31,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-20",
          "content": "<p>Come to me, all who labor and are heavy laden, and I will give you rest.</p>\n<p><strong>Matthew 11:28</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for one hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If you had to guess how many times per day you check your phone, what would be your guess? What about how many hours per day you spend on your phone? (If you want to find out how accurate your guesses are, you can download the <a href=\"https://itunes.apple.com/us/app/moment-screen-time-tracker/id771541926?mt=8\">Moment app for iOS</a> or <a href=\"https://play.google.com/store/apps/details?id=com.zerodesktop.appdetox.qualitytime\">Quality Time app for Android</a> and it will track your usage.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Does your mind ever feel overwhelmed, frazzled or drained by the sheer volume of content, ads, and information that comes at you from every angle? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What effect (if any) do you think your relationship with your phone has on your relationship with Jesus? (It’s helpful because I read my Bible/journal more, It has no effect, It too often distracts me from my focus on him, etc.)</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 32,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-21",
          "content": "<p>&ldquo;What the Net seems to be doing is chipping away my capacity for concentration and contemplation. Whether I&rsquo;m online or not, my mind now expects to take in information the way the Net distributes it: in a swiftly moving stream of particles. Once I was a scuba diver in the sea of words. Now I zip along the surface like a guy on a Jet Ski.&rdquo;</p>\n<p><strong>&mdash;Nicholas Carr, <em>The Shallows</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for one hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the tech-free time feel? (Difficult, rejuvenating, stressful, boring, life-giving, etc.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Do you find it difficult to pay attention to things that are longer than short bursts of information? If so, what negative effects might a shortening attention span have on your life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How many notifications do you have turned on on your phone? Would it be helpful for you to turn off many of these?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 33,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-22",
          "content": "<p>Thus says the Lord: &ldquo;Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls. But they said, &lsquo;We will not walk in it.&rsquo; I set watchmen over you, saying, &lsquo;Pay attention to the sound of the trumpet!&rsquo; But they said, &lsquo;We will not pay attention.&rsquo; Therefore hear, O nations, and know, O congregation, what will happen to them. Hear, O earth; behold, I am bringing disaster upon this people, the fruit of their devices, because they have not paid attention to my words; and as for my law, they have rejected it.&rdquo;</p>\n<p><strong>Jeremiah 6:16-19</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for one hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If you had to guess, how many hours of TV do you watch per day? (Studies vary, but one reputable survey says the average American watches 2.8 hours/day.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What TV shows are you watching right now? What effect might they be having on you (both as individual shows and as a whole)?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When you are bored and you mindlessly pick up your phone or turn on the TV, what are you looking for? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 34,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-23",
          "content": "<p>&ldquo;The mania of our online lives reveals this: we keep swiping and swiping because we are never fully satisfied.&rdquo;</p>\n<p><strong>&mdash;Andrew Sullivan</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for one hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Is there anything in your digital life that you feel the need to hide from God or others? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What apps have you spent the most time on recently? What effect are they having on you and your ability to focus on God?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What apps might you need to prioritize by moving to more visible space on your phone, and what apps might you need to delete or restrict?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 35,
          "title": "Fight distraction by going tech-free for one hour.",
          "date": "2018-02-24",
          "content": "<p>&ldquo;Find out what helps you connect with God, and make a discipline out of it.&rdquo;</p>\n<p><strong>&mdash;Pete Greig</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least one hour of intentional time away from all technology. Do whatever you like as long as it is intentional—spend undistracted time with God or people in your life, go for a walk, read a book, enjoy nature, etc. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you go tech-free for one hour today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during that time? Was what you did a healthy use of that time?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What have been your favorite things you’ve done during your tech-free time this week? Is there anything you need to change about your life to make those things more consistent? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is the most spiritually encouraging, life-giving book you’ve ever read, and why? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is your current pattern and frequency of reading? Would you be healthier or happier if you read more, or are you content with your current practice? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 36,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-02-25",
          "content": "<p>&ldquo;I feel like I have to get saved every morning. I wake up and the devil is sitting on my face.&rdquo;</p>\n<p><strong>&mdash;John Piper</strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the time you spent with God feel? What was difficult about it, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When you begin to spend intentional time with God in solitude, what thoughts run through your mind? Are there any lies or accusations that you need to combat with the gospel? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When time with God doesn’t feel like you’d want it to, how does God grow you through consistently showing up anyway? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 37,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-02-26",
          "content": "<p>&ldquo;In solitude, we seek God, but the first thing we encounter is ourselves. The real you shows up, with all of its embarrassing attributes. Frustrated about your sex life? Tired of compulsively eating garbage? Burdened by the shame of an addiction to pornography or substances? Solitude often forces us to look these sorrows square in the face and makes us reckon with a cold reality: we like our busyness. We like the chaos of our lives. We like it because it distracts us from ourselves.&rdquo;</p>\n<p><strong>&mdash;Mike Cosper, <em>Recapture the Wonder</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the time you spent with God feel? What was difficult about it, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What do you think your biggest hindrances to spending consistent, quality time with God are? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Is there anything about spending time with God that makes you uncomfortable because you don’t like what it exposes in you? How does the gospel counteract those feelings if so?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 38,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-02-27",
          "content": "<p>&ldquo;The most difficult problem is not finding time but convincing myself that this is important enough to set aside the time.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How are you at time management in general in your life? Do you mostly tell your time where to go, or do you mostly wonder where it went? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever regularly (before this challenge) planned specific time to spend with God in solitude? How has your planning (or lack of planning) affected this practice in your life?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>If you did not intentionally block off this 30 minutes to spend with God today, what would you most likely have ended up doing with this time? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 39,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-02-28",
          "content": "<p>&ldquo;Life oriented around the spiritual disciplines is not a pathway to pleasing God but a pathway to experiencing the joy of God that is already ours in Jesus. The disciplines reshape our awareness and perception, and that awareness has a way of growing roots and branches, expanding far beyond our &lsquo;prayer time&rsquo; and into our whole lives.&rdquo;</p>\n<p><strong>&mdash;Mike Cosper, <em>Recapture the Wonder</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the time you spent with God feel? What was difficult about it, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is one of the most meaningful or impactful verses (or passages) of Scripture you’ve ever read?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What has God taught you through this passage, and how has it impacted your life? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 40,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-03-01",
          "content": "<p>Therefore, as you received Christ Jesus the Lord, so walk in him, rooted and built up in him and established in the faith, just as you were taught, abounding in thanksgiving.</p>\n<p><strong>Colossians 2:6-7</strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are times in your life where you’ve been the most aware of God’s presence or most felt the weight of his love for you?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are some of the most meaningful prayers God has answered in your life the way you wanted him to? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How has God grown you to trust in him even in times where your prayers may not have been answered in the way you wanted them to be? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 41,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-03-02",
          "content": "<p>&ldquo;A farmer is helpless to grow grain; all he can do is provide the right conditions for the growing of grain. He cultivates the ground, he plants the seed, he waters the plants, and then the natural forces of the earth take over and up comes the grain...This is the way it is with the spiritual disciplines&mdash;they are a way of sowing to the Spirit...By themselves the spiritual disciplines can do nothing; they can only get us to the place where something can be done.&rdquo;</p>\n<p><strong>&mdash;Richard J. Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How did the time you spent with God feel? What was difficult about it, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How are you growing spiritually through practicing simple, intentional disciplines? Stop and take a few moments to thank God for his faithfulness in producing growth. </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are there any spiritual disciplines that you have never regularly practiced that would be helpful for you to start? (Studying Scripture, meditating on Scripture, prayer, fasting, solitude, worship, celebration, serving, confession, observing the Sabbath, etc.)</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 42,
          "title": "Fight distraction by spending 30 minutes alone with God.",
          "date": "2018-03-03",
          "content": "<p>&ldquo;The last remaining place I&rsquo;m guaranteed to be alone with my thoughts is in the shower.&rdquo;</p>\n<p><strong>&mdash;Teddy Wayne</strong></p>\n<p>&nbsp;</p>\n<p>Spend 30 minutes in solitude connecting with God through Scripture and prayer. It may be helpful to do things that help you focus on God (whether that is journaling, silence, getting out in nature, etc.). </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 30 minutes alone with God today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do to focus your attention on God and spend time with him? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How would you describe the differences in a day when you get quality time with God vs. days when you do not?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What Scripture have you been reading, and what has God been teaching you through it?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are the most helpful things you’ve done in your time alone with God, and how could you prioritize those things in your life as you move forward? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 43,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-04",
          "content": "<p>&ldquo;In the little cracks of time in my day, with my limited attention, I am more apt to speak into social media than I am to pray. That&rsquo;s the brute honesty of the situation. And because of this negligence, God feels more distant to my life as a result.&rdquo;</p>\n<p><strong>&mdash;Tony Reinke</strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What was difficult about doing this, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Overall, how would you rate your media consumption, and what reasoning would you give? (Very healthy, appropriate, distracting, very unhealthy, etc.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What do you normally turn to to fill up the “little cracks of time” in your days? What are these small habits doing to you over time?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 44,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-05",
          "content": "<p>&ldquo;I think TV addiction is probably the first addiction that people experience in life.&rdquo;</p>\n<p><strong>&mdash;Teal Burrell</strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What do you think are the most enriching or beneficial TV shows or movies you’ve ever watched? What was it about them that made them beneficial, and how did they affect you in a positive way? (Did they inspire or encourage you, help you discern your culture better, etc.?)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are the least beneficial TV shows or movies you’ve ever watched? What did giving them your attention do to you? (Did they make you feel disengaged, apathetic, discontent, lustful, zombie-like, etc.?)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>A multi-season show will consume dozens, if not hundreds of hours of your life (if you want to see how much time shows you’ve watched have consumed you can go to <a href=\"http://www.tiii.me\">www.tiii.me</a>).</p><p> How do you typically go about deciding if a show is worth your time? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 45,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-06",
          "content": "<p>&ldquo;For all the abuses and all the devastation of distraction, wasted hours, narcissistic self-promotion, and pornographic degradation, I see the computer and the smartphone as gifts of God&mdash;like papyrus and the codex and paper and the printing press.&rdquo;</p>\n<p><strong>&mdash;John Piper</strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Which apps that you use consistently are the most beneficial for your spiritual health? (Which ones mostly produce engagement, concern for God/others/the world, etc.?)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Which are the least beneficial? (Which ones mostly produce discontentment, apathy, mindlessness, etc.?)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are some practical ways you could use technology more helpfully to aid your spiritual growth? (Making use of calendars, reminders, apps, Bible reading, prayer lists, etc.) Take some time to set those up.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 46,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-07",
          "content": "<p>&ldquo;And what if you spend five minutes getting yourself happily entertained in the morning, rather than facing the responsibilities of the day immediately, and you find at the end of those five minutes that they have drug you down into a silly, demeaning, small-minded, hollow, immature frame of mind?&rdquo;</p>\n<p><strong>&mdash;Tony Reinke</strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What was difficult about doing this, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is your typical morning routine? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What changes could you make in your morning routine to help you focus on God as you start your day? What would you need to cut, and what would you need to add? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 47,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-08",
          "content": "<p>&ldquo;In the nitty-gritty of my daily life, repentance for idolatry may look as pedestrian as shutting off my email an hour earlier or resisting that alluring clickbait to go to bed.&rdquo;</p>\n<p><strong>&mdash;Tish Harrison Warren, <em>Liturgy of the Ordinary</em></strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is your typical mid-day routine? What things do you typically do in whatever breaks of time you get? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What is your typical nighttime routine? What do you do between ending your responsibilities for the day and going to bed? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What changes could you make in these routines to help you cultivate your relationship with God? What would you need to cut out, and what would you need to add? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 48,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-09",
          "content": "<p>&ldquo;I always feel it well just to put a few words of prayer between everything I do.&rdquo;</p>\n<p><strong>&mdash;Charles Spurgeon</strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What was difficult about doing this, and what was rewarding?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Do you ever pray to God as you are doing things in your daily life? If so, what does that look like for you? If not, what keeps you from doing that?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How could you use your phone to help you pray more consistently? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 49,
          "title": "Fight distraction by fasting from TV & social media. ",
          "date": "2018-03-10",
          "content": "<p>If then you have been raised with Christ, seek the things that are above, where Christ is, seated at the right hand of God. Set your minds on things that are above, not on things that are on earth.</p>\n<p><strong>Colossians 3:1-2</strong></p>\n<p>&nbsp;</p>\n<p>The goal for this week is to refrain from all forms of TV and social media in an effort to reduce distractions and pay closer attention to what the things you are doing may be doing to you. As you do this, ask the Holy Spirit to give you insight into the patterns of your life. </p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you fast from TV and social media in the last 24 hours?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do during the time you would have normally spent on these things? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What bearing (if any) does your relationship with God have on the media you choose to consume? Do you tend to see those things as separate or integrated? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What bearing (if any) does your relationship with God have on how you use your phone? What might it look like to look at your phone with God? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>As a way to practice looking at your phone with God, open up your messages or your contact list. Spend a few minutes trying to “pray while you scroll.” Ask God to point out specific people to you and prompt you to pray for them. </p>\n\n<p>What’s going on in their lives, and how can you approach God on their behalf? Write down any specific people God brings to your mind and the things you pray for them about.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 50,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-11",
          "content": "<p>&ldquo;The criteria for coming to Jesus is weariness. Come overwhelmed with life. Come with your wandering mind. Come messy...The very things we try to get rid of&mdash;our weariness, our distractedness, our messiness&mdash;are what get us in the front door! That&rsquo;s how the gospel works. That&rsquo;s how prayer works.&rdquo;</p>\n<p><strong>&mdash;Paul Miller, <em>A Praying Life</em></strong></p>\n<p>When Jesus&rsquo; taught his disciples how to pray, this is the rubric he gave them. As you use this prayer as an intentional structure in your set-aside prayer time, the goal is that it would also influence the way you pray to and interact with God throughout your daily life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God today? Re-center yourself on God’s magnitude and power.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What in your life has been broken by sin? How do you need God to fix it?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Ask him for whatever it is.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Are there any areas you feel especially tempted in (or attacked) right now?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 51,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-12",
          "content": "<p>&ldquo;Sometimes my morning prayer simply begins like this: Lord, I&rsquo;m tired, and I&rsquo;m grumpy, but I&rsquo;m here again.&rdquo;</p>\n<p><strong>&mdash;Ray Lowe</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you operated today as if God is a father who cares for you? Ask him to help you see and approach him as such.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who is hurting in your life right now? Ask God to act in their lives.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Financial provision? Spiritual joy or sustenance?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>If Satan wanted to devour your life, what strategy might he take? Ask God for provision and protection from evil and temptation.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 52,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-13",
          "content": "<p>&ldquo;I have yet to meet a chronic worrier who enjoys an excellent prayer life.&rdquo;</p>\n<p><strong>&mdash;D.A. Carson</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God’s worthiness to be worshipped and appreciated today? Stop and tune your heart to do so right now.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who are you building relationship with that you are asking God to save? Pray for their receptiveness to the gospel.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Healing from depression or anxiety? Emotional stability?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who are you frustrated with? Pray for God to give you grace and patience with them.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>What have been your areas of weakness in the past? Ask God to solidify you against those.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 53,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-14",
          "content": "<p>&ldquo;Time in prayer makes you even more dependent on God because you don&rsquo;t have as much time to get things done. Every minute spent in prayer is one less minute where you can be doing something &lsquo;productive.&rsquo; So the act of praying means that you have to rely more on God.&rdquo;</p>\n<p><strong>&mdash;Paul Miller, <em>A Praying Life</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>How do you need God to be bigger than you today? Tell him those things.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What do you want to see God do in the lives of your family members, friends, or LifeGroup members?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Relational support or comfort? Freedom from addiction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you feel like anyone owes you? Ask the Spirit to help you release them from any unhelpful relational debts.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Satan’s name is roughly translated as “the accuser.” Do you feel accused in any areas right now? Ask God to speak truth over you and remind you how he sees you.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 54,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-15",
          "content": "<p>And when you pray, do not heap up empty phrases as the Gentiles do, for they think that they will be heard for their many words. Do not be like them, for your Father knows what you need before you ask him.</p>\n<p><strong>Matthew 6:7-8</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you walked in a consistent awareness of your need for him today? Remind your heart that God is a father who has power you don’t as his child.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken in your community? What are needs that only God could meet? Ask him to do so.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need God to do that you can’t?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>What person (or people) in your life are the most difficult for you to forgive?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Jesus calls Satan “the father of lies” (John 8:44). Are you tempted to believe any lies about God right now? Ask God to rebuke them and fill you with truth about him.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 55,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-16",
          "content": "<p>&ldquo;To pray in Jesus&rsquo; name is, essentially, to reground our relationship with God in the saving work of Jesus over and over again. It also means to recognize your status as a child of God, regardless of your inner state.&rdquo;</p>\n<p><strong>&mdash;Tim Keller, <em>Prayer</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>What are your favorite things about God? Tell him those things in a state of worship.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our country? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Do you need grace to hold fast to his sufficiency in your need and weakness?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for reminders of his goodness, faithfulness, victory and sufficiency in your life.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 56,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-17",
          "content": "<p>&ldquo;Lord, help me today to realize that you will be speaking to me thought the events of the day, through people, through things, and through all creation.<br />Give me ears, eyes and heart to perceive you, however veiled your presence may be.<br />Give me insight to see through the exterior of things to the interior truth.<br />Give me your Spirit of discernment.<br />O Lord, you know how busy I must be this day. If I forget you, do not forget me.<br />Amen.&rdquo;</p>\n<p><strong>&mdash;Jacob Astley (1579 - 1652)</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>The very act of praying is acknowledging your weakness. Ask the Spirit to help you see God rightly as you begin to pray.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our world? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What practical needs do you need God to provide for? Ask him to do so, while thanking him for past provision in your life.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>Are you having trouble receiving and walking in God’s forgiveness? Ask him for help with this.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for strength and deliverance in the areas that you feel weak or tempted.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 57,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-18",
          "content": "<p>&ldquo;I have so much to do today that I shall spend the first three hours in prayer.&rdquo;</p>\n<p><strong>&mdash;Martin Luther</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God today? Re-center yourself on God’s magnitude and power.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What in your life has been broken by sin? How do you need God to fix it?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Ask him for whatever it is.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Are there any areas you feel especially tempted in (or attacked) right now?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 58,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-19",
          "content": "<p>&ldquo;A triune God would call us to converse with him...because he wants to share the joy he has. Prayer is our way of entering into the happiness of God himself.&rdquo;</p>\n<p><strong>&mdash;Tim Keller, <em>Prayer</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you operated today as if God is a father who cares for you? Ask him to help you see and approach him as such.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who is hurting in your life right now? Ask God to act in their lives.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Financial provision? Spiritual joy or sustenance?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>If Satan wanted to devour your life, what strategy might he take? Ask God for provision and protection from evil and temptation.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 59,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-20",
          "content": "<p>&ldquo;Prayer is talking with God about what we&rsquo;re thinking and doing together; it is co-laboring with God to accomplish the good purposes of his kingdom.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God’s worthiness to be worshipped and appreciated today? Stop and tune your heart to do so right now.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who are you building relationship with that you are asking God to save? Pray for their receptiveness to the gospel.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Healing from depression or anxiety? Emotional stability?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who are you frustrated with? Pray for God to give you grace and patience with them.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>What have been your areas of weakness in the past? Ask God to solidify you against those.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 60,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-21",
          "content": "<p>Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.</p>\n<p><strong>1 Thessalonians 5:16-18</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>How do you need God to be bigger than you today? Tell him those things.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What do you want to see God do in the lives of your family members, friends, or LifeGroup members?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Relational support or comfort? Freedom from addiction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you feel like anyone owes you? Ask the Spirit to help you release them from any unhelpful relational debts.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Satan’s name is roughly translated as “the accuser.” Do you feel accused in any areas right now? Ask God to speak truth over you and remind you how he sees you.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 61,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-22",
          "content": "<p>&ldquo;Life with God reorders the world and invites us into silence and solitude, where our simmering anxieties and sorrows can be brought into God&rsquo;s healing presence.&rdquo;</p>\n<p><strong>&mdash;Mike Cosper, <em>Recapture the Wonder</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you walked in a consistent awareness of your need for him today? Remind your heart that God is a father who has power you don’t as his child.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken in your community? What are needs that only God could meet? Ask him to do so.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need God to do that you can’t?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>What person (or people) in your life are the most difficult for you to forgive?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Jesus calls Satan “the father of lies” (John 8:44). Are you tempted to believe any lies about God right now? Ask God to rebuke them and fill you with truth about him.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 62,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-23",
          "content": "<p>&ldquo;Praying out loud can be helpful because it keeps you from getting lost in your head. It makes your thoughts concrete. But it is more than technique; it is also a statement of faith. You are audibly declaring your belief in a God who is alive&hellip;This helps me become much more aware of my need. My prayers become more serious.&rdquo;</p>\n<p><strong>&mdash;Paul Miller, <em>A Praying Life</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>What are your favorite things about God? Tell him those things in a state of worship.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our country? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Do you need grace to hold fast to his sufficiency in your need and weakness?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for reminders of his goodness, faithfulness, victory and sufficiency in your life.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 63,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-24",
          "content": "<p>&ldquo;The imaginary self can be very successful in the world, and may even be celebrated by the church, but it can never truly pray because our Lord only accepts the company of real sinners and never imaginary saints.&rdquo;</p>\n<p><strong>&mdash;Skye Jethani</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>The very act of praying is acknowledging your weakness. Ask the Spirit to help you see God rightly as you begin to pray.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our world? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What practical needs do you need God to provide for? Ask him to do so, while thanking him for past provision in your life.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>Are you having trouble receiving and walking in God’s forgiveness? Ask him for help with this.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for strength and deliverance in the areas that you feel weak or tempted.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 64,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-25",
          "content": "<p>&ldquo;Our prayers should arise out of immersion in the Scripture. We speak only to the degree we are spoken to...The wedding of the Bible and prayer anchors your life down in the real God.&rdquo;</p>\n<p><strong>&mdash;Tim Keller, <em>Prayer</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God today? Re-center yourself on God’s magnitude and power.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What in your life has been broken by sin? How do you need God to fix it?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Ask him for whatever it is.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Are there any areas you feel especially tempted in (or attacked) right now?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 65,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-26",
          "content": "<p>&ldquo;If we only knew how much we need God&rsquo;s grace, we would never lose touch with him.&rdquo;</p>\n<p><strong>&mdash;Brother Lawrence</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you operated today as if God is a father who cares for you? Ask him to help you see and approach him as such.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who is hurting in your life right now? Ask God to act in their lives.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Financial provision? Spiritual joy or sustenance?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>If Satan wanted to devour your life, what strategy might he take? Ask God for provision and protection from evil and temptation.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 66,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-27",
          "content": "<p>&ldquo;To pray is to change. All who have walked with God have viewed prayer as the main business of their lives.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God’s worthiness to be worshipped and appreciated today? Stop and tune your heart to do so right now.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who are you building relationship with that you are asking God to save? Pray for their receptiveness to the gospel.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Healing from depression or anxiety? Emotional stability?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who are you frustrated with? Pray for God to give you grace and patience with them.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>What have been your areas of weakness in the past? Ask God to solidify you against those.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 67,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-28",
          "content": "<p>Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak.</p>\n<p><strong>Matthew 26:41</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>How do you need God to be bigger than you today? Tell him those things.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What do you want to see God do in the lives of your family members, friends, or LifeGroup members?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Relational support or comfort? Freedom from addiction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you feel like anyone owes you? Ask the Spirit to help you release them from any unhelpful relational debts.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Satan’s name is roughly translated as “the accuser.” Do you feel accused in any areas right now? Ask God to speak truth over you and remind you how he sees you.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 68,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-29",
          "content": "<p>&ldquo;God will either give us what we ask or give us what we would have asked if we knew everything he knows.&rdquo;</p>\n<p><strong>&mdash;Tim Keller, <em>Prayer</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you walked in a consistent awareness of your need for him today? Remind your heart that God is a father who has power you don’t as his child.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken in your community? What are needs that only God could meet? Ask him to do so.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need God to do that you can’t?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>What person (or people) in your life are the most difficult for you to forgive?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Jesus calls Satan “the father of lies” (John 8:44). Are you tempted to believe any lies about God right now? Ask God to rebuke them and fill you with truth about him.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 69,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-30",
          "content": "<p>&ldquo;Though the Christian life requires intense activity, it is not in the least self-reliant.\"</p>\n<p><strong>&mdash;J.I. Packer</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>What are your favorite things about God? Tell him those things in a state of worship.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our country? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Do you need grace to hold fast to his sufficiency in your need and weakness?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for reminders of his goodness, faithfulness, victory and sufficiency in your life.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 70,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-03-31",
          "content": "<p>&ldquo;In the Christian life, there are no shortcuts...There is only the slow and patient work of showing up, reordering our days, seeking God in word and prayer, and looking for him with a moment-to-moment awareness.&rdquo;</p>\n<p><strong>&mdash;Mike Cosper, <em>Recapture the Wonder</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>The very act of praying is acknowledging your weakness. Ask the Spirit to help you see God rightly as you begin to pray.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our world? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What practical needs do you need God to provide for? Ask him to do so, while thanking him for past provision in your life.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>Are you having trouble receiving and walking in God’s forgiveness? Ask him for help with this.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for strength and deliverance in the areas that you feel weak or tempted.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 71,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-01",
          "content": "<p>&ldquo;The best news of the Christian gospel is that the supremely glorious Creator of the universe has acted in Jesus Christ's death and resurrection to remove every obstacle between us and himself so that we may find everlasting joy in seeing and savoring his infinite beauty.&rdquo;</p>\n<p><strong>&mdash;John Piper</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God today? Re-center yourself on God’s magnitude and power.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What in your life has been broken by sin? How do you need God to fix it?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Ask him for whatever it is.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Are there any areas you feel especially tempted in (or attacked) right now?</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 72,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-02",
          "content": "<p>&ldquo;Our time frames are not in touch with ultimate reality. Our perspective on timing compared with God's is analogous to a two-year-old&rsquo;s with an adult&rsquo;s. God has good reasons for making us wait a long time to see some prayers answered.&rdquo;</p>\n<p>&mdash;<strong>Tim Keller,<em> Prayer</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you operated today as if God is a father who cares for you? Ask him to help you see and approach him as such.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who is hurting in your life right now? Ask God to act in their lives.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Financial provision? Spiritual joy or sustenance?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>If Satan wanted to devour your life, what strategy might he take? Ask God for provision and protection from evil and temptation.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 73,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-03",
          "content": "<p>But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you.</p>\n<p><strong>Matthew 6:6</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you lost sight of God’s worthiness to be worshipped and appreciated today? Stop and tune your heart to do so right now.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>Who are you building relationship with that you are asking God to save? Pray for their receptiveness to the gospel.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Healing from depression or anxiety? Emotional stability?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who are you frustrated with? Pray for God to give you grace and patience with them.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>What have been your areas of weakness in the past? Ask God to solidify you against those.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 74,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-04",
          "content": "<p>&ldquo;We can&rsquo;t even sleep in our own strength.&rdquo;</p>\n<p><strong>&mdash;John Piper</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>How do you need God to be bigger than you today? Tell him those things.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What do you want to see God do in the lives of your family members, friends, or LifeGroup members?\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Relational support or comfort? Freedom from addiction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what outer, behavioral level ways have you sinned against God or others today?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you feel like anyone owes you? Ask the Spirit to help you release them from any unhelpful relational debts.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Satan’s name is roughly translated as “the accuser.” Do you feel accused in any areas right now? Ask God to speak truth over you and remind you how he sees you.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 75,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-05",
          "content": "<p>&ldquo;There is not in the world a kind of life more sweet and delightful, than that of a continual conversation with God.&rdquo;</p>\n<p><strong>&mdash;Brother Lawrence</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>Have you walked in a consistent awareness of your need for him today? Remind your heart that God is a father who has power you don’t as his child.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken in your community? What are needs that only God could meet? Ask him to do so.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need God to do that you can’t?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>In what inner, hidden ways have you sinned against God or others?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>What person (or people) in your life are the most difficult for you to forgive?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Jesus calls Satan “the father of lies” (John 8:44). Are you tempted to believe any lies about God right now? Ask God to rebuke them and fill you with truth about him.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 76,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-06",
          "content": "<p>&ldquo;Oddly enough, many people struggle to pray because they are focusing on praying, not on God.&rdquo;</p>\n<p><strong>&mdash;Paul Miller, <em>A Praying Life</em></strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>What are your favorite things about God? Tell him those things in a state of worship.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our country? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What do you need today? Do you need grace to hold fast to his sufficiency in your need and weakness?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>How has your heart turned from focusing on God and being content in his satisfaction?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Who has sinned against you, offended you, or angered you today? Pray for God to give you grace to forgive them fully & freely.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for reminders of his goodness, faithfulness, victory and sufficiency in your life.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 77,
          "title": "Fight self-reliance by praying The Lord’s Prayer.",
          "date": "2018-04-07",
          "content": "<p>&ldquo;Don&rsquo;t seek to develop a prayer life&mdash;seek a praying life. A &lsquo;prayer life&rsquo; is a segmented time for prayer. You&rsquo;ll end feeling guilty that you don&rsquo;t spend more time in prayer. Eventually you&rsquo;ll probably feel defeated and give up. A &lsquo;praying life&rsquo; is a life that is saturated with prayerfulness&mdash;you seek to do all that you do with the Lord.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard</strong></p>",
          "questions": [
            {
              "id": "",
              "title": "<p><strong><em>Our Father in heaven, hallowed be your name,<br /></em></strong>Prayer starts by acknowledging and centering yourself on God&rsquo;s worthiness to be worshipped and prayed to. He is big; you are not. He is capable of answering prayers; you are not. He is in heaven; you are on earth. The separation is acknowledged and appreciated.</p>\n<p>The very act of praying is acknowledging your weakness. Ask the Spirit to help you see God rightly as you begin to pray.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>your kingdom come, your will be done, on earth as it is in heaven.<br /></em></strong>An integral part of prayer is asking God to bring his kingdom to earth by advancing the gospel, freeing captives of sin and healing the brokenness of creation.</p>\n<p>What is broken by sin in our world? Ask God to respond and mobilize his church.\n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>Give us today our daily bread.<br /></em></strong>Asking God for daily bread means asking him to provide for you&mdash;physically, spiritually, emotionally, relationally&mdash;in every arena of life. This is acknowledging your utter dependence on the Lord and asking for him to provide.</p>\n<p>What practical needs do you need God to provide for? Ask him to do so, while thanking him for past provision in your life.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And forgive us our debts,<br /></em></strong>Part of prayer is acknowledging the ways you have sinned against God and others, then asking for (and accepting) God&rsquo;s forgiveness because the righteousness of Christ stands in your place.</p>\n<p>Are you having trouble receiving and walking in God’s forgiveness? Ask him for help with this.</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>as we also have forgiven our debtors.<br /></em></strong>The gospel says we can forgive others because we&rsquo;ve first been forgiven by Jesus. The grace we receive will naturally bend outward and be extended to others as we walk in the Spirit.</p>\n<p>Do you have lingering relational weirdness, bitterness, or tension with anyone?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p><strong><em>And lead us not into temptation, but deliver us from the evil one.<br /></em></strong>Scripture tells us that we have a spiritual enemy who roams around like a lion seeking someone to devour (1 Peter 5:8). Those in Christ have no reason to fear Satan and demons because of Christ&rsquo;s victory and power over them, but it is wise to be aware of their schemes to hurt and destroy and ask God for protection from any attacks.</p>\n<p>Ask God for strength and deliverance in the areas that you feel weak or tempted.</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 78,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-08",
          "content": "<p>&ldquo;Whenever the Christian idea of meditation is taken seriously, there are those who assume it is synonymous with the concept of meditation centered in Eastern religions. In reality, the two ideas stand worlds apart. Eastern meditation is an attempt to empty the mind; Christian meditation is an attempt to fill the mind. The two ideas are quite different.&rdquo;</p>\n<p>&mdash;<strong>Richard Foster</strong>, <strong><em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>John 20:19-31</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "Free space for journaling as you meditate:",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 79,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-09",
          "content": "<p>&ldquo;The movement from na&iuml;ve optimism to cynicism is the new American journey...Because it is uncomfortable to feel our unbelief, to come face-to-face with our cynicism, we dull our souls with the narcotic of activity. Many Christians haven&rsquo;t stopped believing in God, we have just become functional deists.&rdquo;</p>\n<p><strong>&mdash;Paul Miller, <em>A Praying Life</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Luke 24:1-12</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 80,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-10",
          "content": "<p>For whatever was written in former days was written for our instruction, that through endurance and through the encouragement of the Scriptures we might have hope.</p>\n<p><strong>Romans 15:4</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Luke 24:13-35</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 81,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-11",
          "content": "<p>&ldquo;Failure to know what God is really like and what his law requires destroys the soul, ruins society, and leaves people to eternal ruin&hellip;This is the tragic condition of Western culture today, which has put away the information about God that God himself has made available.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Renovation of the Heart in Daily Practice</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Luke 24:36-53</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 82,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-12",
          "content": "<p>Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers; but his delight is in the law of the Lord, and on his law he meditates day and night. He is like a tree planted by streams of water that yields its fruit in due season, and its leaf does not wither. In all that he does, he prospers.</p>\n<p><strong>Psalm 1:1-2</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>John 16:1-15</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 83,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-13",
          "content": "<p>&ldquo;Christian meditation, very simply, is the ability to hear God&rsquo;s voice and obey his word. It is that simple&hellip;It involves no hidden mysteries, no secret mantras, no mental gymnastics, no esoteric flights into the cosmic consciousness.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>John 16:16-24</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 84,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-14",
          "content": "<p>My soul will be satisfied as with fat and rich food, and my mouth will praise you with joyful lips, when I remember you upon my bed, and meditate on you in the watches of the night.</p>\n<p><strong>Psalm 63:5-6</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>John 16:25-33</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 85,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-15",
          "content": "<p>&ldquo;In the discipline of meditation we are not so much acting as we are opening ourselves to be acted upon. We invite the Holy Spirit to come and work within us&mdash;teaching, cleansing, comforting, rebuking.&rdquo;</p>\n<p><strong>&mdash;Richard Foster</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>John 14:15-27</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 86,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-16",
          "content": "<p>&ldquo;To read certain verses to fulfill a Bible reading system is not to take the Scripture in, to dwell upon it, to ponder its meaning and to explore its implications. Often, it&rsquo;s an effort to perform, to check off one more thing I need to do today to be a decent Christian. This explains why many folks know a lot of Bible trivia but do not meet God when they open the Scripture. To dwell, to ponder, to explore means reading slowly and wondering what life, reality, or even I personally would look like if this were <em>really</em> true. It means asking, What is God saying to me today?&rdquo;</p>\n<p><strong>&mdash;Jan Johnson</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Acts 2:1-21</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 87,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-17",
          "content": "<p>I remember the days of old; I meditate on all that you have done; I ponder the work of your hands. I stretch out my hands to you; my soul thirsts for you like a parched land.</p>\n<p><strong>Psalm 143:5-6</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Acts 2:22-36</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 88,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-18",
          "content": "<p>&ldquo;The most obvious thing we can do is draw certain key portions of Scripture into our mind and make them a part of the permanent fixtures of thought. This is the primary discipline for the thought life. We need to know these passages like the back of our hand, and a good way to do that is to memorize them and then <em>constantly turn them over</em> in our mind as we go through the events and circumstances of our lives.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Renovation of the Heart in Daily Practice</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Acts 2:37-47</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 89,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-19",
          "content": "<p>It is the LORD who goes before you. He will be with you; he will not leave you or forsake you. Do not fear or be dismayed.</p>\n<p><strong>Deuteronomy 31:8</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Acts&nbsp;4:1-21</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 90,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-20",
          "content": "<p>&ldquo;The Bible uses two different Hebrew words to convey the idea of meditation, and together they are used some fifty-eight times. These words have various meanings: listening to God&rsquo;s word, reflecting on God&rsquo;s works, rehearsing God&rsquo;s deeds, ruminating on God&rsquo;s law, and more. In each case there is stress upon changed behavior as a result of our encounter with the living God. Repentance and obedience are essential features in any biblical understanding of meditation.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Acts&nbsp;4:23-37</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 91,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-21",
          "content": "<p>Only to sit and think of God,<br />Oh what a joy it is!<br />To think the thought, to breathe the Name<br />Earth has no higher bliss.</p>\n<p><strong>&mdash;Frederick W. Faber</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Galatians 5:13-25</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 92,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-22",
          "content": "<p>&ldquo;God is not impassive toward us, like an unresponsive pagan idol; he calls us to grow into a life of personal interchange with him that does justice to the idea of our being his children.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Hearing God</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Acts 9:1-19</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 93,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-23",
          "content": "<p>&ldquo;The purpose of meditation is to enable us to hear God more clearly. Meditation is listening, sensing, heeding the life and light of Christ. This comes right to the heart of our faith. The life that pleases God is not a set of religious duties; it is to hear His voice and obey His word. Meditation opens the door to this way of living.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Romans 5:1-11</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 94,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-24",
          "content": "<p>&ldquo;Meditation on the Scriptures has occupied a deep and enduring place in the history of the church as one of the most enjoyed means of God&rsquo;s grace for his people.&rdquo;</p>\n<p><strong>&mdash;David Mathis, <em>Habits of Grace</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Romans&nbsp;7:15-25</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 95,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-25",
          "content": "<p>&ldquo;The biblical foundation for meditation, and the wonderful news is that Jesus has not stopped acting and speaking. He is resurrected and at work in our world. He is not idle, nor has he developed laryngitis. He is alive and among us as our Priest to forgive us, our Prophet to teach us, our King to rule us, our Shepherd to guide us.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Romans&nbsp;8:1-11</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 96,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-26",
          "content": "<p>&ldquo;Ideas and images are the primary focus of Satan&rsquo;s efforts to defeat God&rsquo;s purposes with and for humankind. When we are subject to Satan&rsquo;s ideas and images, he can take a holiday. Thus, when he undertook to draw Eve away from God, he did not hit her with a stick, but with an idea: that God could not be trusted and that she must act on her own to secure her own well-being. The single most important thing in our mind is our idea of God and the images associated with it.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Renovation of the Heart in Daily Practice</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Romans&nbsp;8:12-17</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 97,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-27",
          "content": "<p>&ldquo;When we constantly and thoughtfully engage ourselves with the ideas, images, and information that are provided by God through the Scriptures&hellip;we are nourished by the Holy Spirit in ways far beyond our own efforts or understanding. This transforms our entire life.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Renovation of the Heart in Daily Practice</em></strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Romans&nbsp;8:18-30</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 98,
          "title": "Fight cynicism by meditating on Scripture.",
          "date": "2018-04-28",
          "content": "<p>This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.</p>\n<p><strong>Joshua 1:8</strong></p>\n<p>&nbsp;</p>\n<p>Spend at least 15 minutes today meditating on the following passage (a paper Bible is preferred). The goal for this practice is for God&rsquo;s words to encourage our belief and trust in him.</p>\n<p><strong>Romans&nbsp;8:31-39</strong></p>\n<p>&nbsp;</p>\n<p><strong>Questions to ask as you meditate:</strong></p>\n<ul>\n<li>What does this passage reveal about God?</li>\n<li>What does this passage reveal about me?</li>\n<li>What sticks out the most to me, and why?</li>\n<li>How do I need to repent or change?</li>\n<li>How do I need God&rsquo;s help with this?</li>\n<li>Who do I know that I could encourage with this truth?</li>\n</ul>\n<p>&nbsp;</p>\n<p><strong>Suggested ways to help you meditate on Scripture (do in any order you like): </strong></p>\n<ul>\n<li>Ask the Holy Spirit to clear your mind of any distractions and help you focus. Ask him to convict and encourage you by pointing your heart to Jesus through the passage.</li>\n<li>Read the passage multiple times.</li>\n<li>Try to put yourself in the passage and feel with your senses what it would have felt like to be there. If it&rsquo;s a narrative, picture yourself in the story. If it&rsquo;s a letter, try to imagine who is writing it and who is receiving it. What is their life like, and how would they feel hearing this?</li>\n<li>Ask the Holy Spirit to point out specific words, phrases, or ideas to you as you read.</li>\n<li>If anything in the passage reveals a weakness in you, try turning that portion into a prayer.</li>\n<li>Read the passage out loud (if that helps you concentrate on it).</li>\n<li>Write out the passage, or portions of it, in a journal.</li>\n<li>Focus on a certain verse or section, turning it over in your mind until it lodges in your memory.</li>\n<li>Pray and thank God for the truths about him that the passage reveals.</li>\n</ul>",
          "questions": [
            {
              "id": "",
              "title": "<p>Free space for journaling as you meditate:</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 99,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-04-29",
          "content": "<p>&ldquo;Prayer gives us relief from the melancholy burden of self-absorption.&rdquo;</p>\n<p><strong>&mdash;Tim Keller, <em>Prayer</em></strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. If you need help picking a person, think through your friends, family members, LifeGroup members, coworkers, neighbors, etc. You could also pull up your contacts list on your phone or a social media app to brainstorm people and ask God to point someone out to you.</p>\n<p>It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>\n<p>&nbsp;</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How difficult was it for you to pray for someone for this amount of time? Did you find your mind wandering to other things? How did you try to focus your attention? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 100,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-04-30",
          "content": "<p>&ldquo;I am not naturally a people person, but when I regularly pray for people using some kind of written system, my heart tunes in to them. I am bolder about asking them how things are going because they are already on my heart...How would you love someone without prayer?\"</p>\n<p><strong>&mdash;Paul Miller, <em>A Praying Life</em></strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Have you ever told someone “I’ll be praying for you,” but in reality you never did? What systems could you set up to be more intentional about praying for the people in your life? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 101,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-05-01",
          "content": "<p>&ldquo;How rarely are we ever truly listened to, and how deep is our need to be heard. I wonder how much wrath in human life is a result of not being heard.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>The Spirit of the Disciplines</em></strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>When you are talking with others in your life, do you find it difficult to zero in and fully listen to what they are saying? What things keep you from fully listening to them? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 102,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-05-02",
          "content": "<p>Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.</p>\n<p><strong>James 5:16</strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are there any people in your life that it would be helpful for you to check in with and see how they are doing, so you can listen well and pray for them this week? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 103,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-05-03",
          "content": "<p>&ldquo;The battleground is between our ears. What is it that is capturing your idle thoughts? What fear or frustration is filling your spare moments? Will you just listen to yourself, or will you start talking? No, preaching&mdash;not letting your concerns shape you, but forming your concerns by the power of the gospel.&rdquo;</p>\n<p>&mdash;<strong>David Mathis</strong>, <strong><em>Habits of Grace</em></strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>This is your fifth day praying for someone for 10 minutes. Has this gotten any easier? What are you learning through this discipline? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 104,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-05-04",
          "content": "<p>&ldquo;Often in praying for people I am given a picture of their condition, and when I share that picture with them, there will be a deep inner sigh, or they will begin weeping. Later they will ask &lsquo;How did you know?&rsquo; Well, I didn&rsquo;t know, I just saw it.&rdquo;</p>\n<p><strong>&mdash;Richard Foster, <em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Has God given you any insight into the lives of people as you’ve prayed for them this week? If so, how might that insight better equip you to love, serve or encourage them?  </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 105,
          "title": "Fight self-absorption by praying for one person for 10 minutes.",
          "date": "2018-05-05",
          "content": "<p>Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.</p>\n<p><strong>Romans 8:26</strong></p>\n<p>&nbsp;</p>\n<p>Ask the Holy Spirit to reveal one person in your life that you can pray for for at least 10 minutes today. It may be helpful to write out things that are going on in their life in a journal to help you focus on how you can pray for them.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you spend 10 minutes praying for someone today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>Who did you pray for? What did you pray for God to do in their life? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Would it be helpful to tell them anything that you prayed for them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>In what ways have you struggled to know what to pray for others this week? How does it make you feel that the Holy Spirit prays alongside you when you don’t know what to say, and how does that motivate you to continue praying for others despite any inadequacy you feel? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 106,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-06",
          "content": "<p>Therefore encourage one another and build one another up, just as you are doing.</p>\n<p><strong>1 Thessalonians 5:11</strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words. The goal is to point others&rsquo; attention to how God is at work in their lives, how he loves them and is pursuing them, etc. We want to offer substantial and meaningful spiritual encouragement, not just say &ldquo;I like your shirt.&rdquo;</p>\n<p>Again&mdash;if you need help picking a person, think through your friends, family members, LifeGroup members, coworkers, neighbors, etc. You could also pull up your contacts list on your phone or a social media app to brainstorm people and ask God to point someone out to you.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are your biggest barriers to encouraging others in a God-centered way? (I just don’t think about others enough, I don’t notice God’s work in their life, I don’t know what to say to them, etc.) </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 107,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-07",
          "content": "<p>&ldquo;Very few people experience the gift of your <em>full and uninhibited attention. </em>Give them that gift.&rdquo;</p>\n<p><strong>&mdash;Benjamin Hardy</strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who has been the most spiritually encouraging person in your life? What have they done, and how has it affected you? (You might consider taking a moment to reach out to them or thank them today.)</p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 108,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-08",
          "content": "<p>&ldquo;Books don&rsquo;t change people, paragraphs do&mdash;sometimes sentences.&rdquo;</p>\n<p><strong>&mdash;John Piper</strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are some of the most meaningful things someone has ever said to you? Are there any sentences that have helped change the course of your life? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 109,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-09",
          "content": "<p>&ldquo;What our neighbor needs is often something we don&rsquo;t know, and so we need to be guided.&rdquo;</p>\n<p><strong>&mdash;Dallas Willard, <em>Hearing God</em></strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who are the most difficult people in your life for you to encourage? Spend a few minutes asking God to direct you and help you know how to approach them. </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 110,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-10",
          "content": "<p>But exhort one another every day, as long as it is called &ldquo;today,&rdquo; that none of you may be hardened by the deceitfulness of sin.</p>\n<p><strong>Hebrews 3:13</strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who in your life is being deceived or hardened by the deceitfulness of sin? Would they potentially be a good person to encourage this week by pointing out their blind spot? (With a spirit of love and graciousness, of course.) Spend a moment praying for them and ask God what he might have you say to them.  </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 111,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-11",
          "content": "<p>&ldquo;Perhaps phone addiction is making it harder to be the sort of person who is good at deep friendship. In lives that are already crowded and stressful, it&rsquo;s easier to let banter crowd out emotional presence...You can have a day of happy touch points without any of the scary revelations, or the boring, awkward or uncontrollable moments that constitute actual intimacy.&rdquo;</p>\n<p><strong>&mdash;David Brooks</strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Our phones naturally draw us inward, even through our physical posture while holding them, and they can easily further our natural self-absorption. What are some ways you could either restrict your phone usage or leverage your phone usage to pull your attention outward? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 112,
          "title": "Fight self-absorption by encouraging someone.",
          "date": "2018-05-12",
          "content": "<p>&ldquo;Some people only go as far as their regular devotions, stopping there and neglecting love, which is the purpose of these devotions. This could easily be seen in their actions and explained why they possessed no solid virtue.&rdquo;</p>\n<p><strong>&mdash;Brother Lawrence, <em>Practicing the Presence of God</em></strong></p>\n<p>&nbsp;</p>\n<p>As you go throughout your day, ask God to give you eyes to see his work in those around you. With God&rsquo;s help, choose at least one person to speak life into by encouraging them with your words.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you encourage someone in a God-centered way today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you say to them? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are you praying God will do in their life through your encouragement? (Take a moment and pray for them right now.)</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What have you learned from your attempts to encourage others this week? How would you like to practice biblical encouragement as a lifestyle moving forward? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 113,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-13",
          "content": "<p>And whoever would be first among you must be servant of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.</p>\n<p><strong>Mark 10:44-45</strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it&rsquo;s a small one, where you can lay down your preferences and sacrificially serve someone in your life. Think ahead and try to anticipate what opportunities you might have to do something unexpected during your day, and also be open to things that come up in the moment. Anything done in a spirit of service and self-denial counts, but the more thoughtful and intentional the act the better!</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a moment thinking about who you might encounter tomorrow, and how you could thoughtfully serve them. Is there anything you can do today to prepare for serving them tomorrow? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>How does the gospel serve as motivation for us to serve others? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 114,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-14",
          "content": "<p>&ldquo;What fun it would be,&rdquo; he thought, &ldquo;if one didn&rsquo;t have to think about happiness!&rdquo;</p>\n<p><strong>&mdash;Aldous Huxley, <em>Brave New World</em></strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it’s a small one, where you can lay down your preferences and sacrificially serve someone in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a moment thinking about who you might encounter tomorrow, and how you could thoughtfully serve them. Is there anything you can do today to prepare for serving them tomorrow? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Think back through the times in your life where you have, either by choice or necessity, put the interests of others ahead of your own. What joys have accompanied these sacrifices? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 115,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-15",
          "content": "<p>&ldquo;Nothing disciplines the inordinate desires of the flesh like service, and nothing transforms the desires of the flesh like serving in hiddenness. The flesh whines against service but screams against hidden service. It strains and pulls for honour and recognition. It will devise subtle, religiously acceptable means to call attention to the service rendered. If we stoutly refuse to give in to this lust of the flesh, we crucify it.&rdquo;</p>\n<p>&mdash;<strong>Richard Foster</strong>, <strong><em>Celebration of Discipline</em></strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it’s a small one, where you can lay down your preferences and sacrificially serve someone in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a moment thinking about who you might encounter tomorrow, and how you could thoughtfully serve them. Is there anything you can do today to prepare for serving them tomorrow? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What are some of the ways your flesh nature as a fallen human “whines against service,” or even “screams against hidden service”? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 116,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-16",
          "content": "<p>&ldquo;We love people universally by loving the particular people we know and can name...Ordinary love, anonymous and unnoticed as it is, is the substance of peace on earth, the currency of God&rsquo;s grace in our daily life.&rdquo;</p>\n<p><strong>&mdash;Tish Harrison Warren, <em>Liturgy of the Ordinary</em></strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it’s a small one, where you can lay down your preferences and sacrificially serve someone in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a moment thinking about who you might encounter tomorrow, and how you could thoughtfully serve them. Is there anything you can do today to prepare for serving them tomorrow? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Who are the people in your life that are the easiest to love and serve, and who are the people that are the most difficult to love and serve? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 117,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-17",
          "content": "<p>When he had washed their feet and put on his outer garments and resumed his place, he said to them, &ldquo;Do you understand what I have done to you? You call me Teacher and Lord, and you are right, for so I am. If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another's feet. For I have given you an example, that you also should do just as I have done to you.&rdquo;</p>\n<p><strong>John 13:12-15</strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it’s a small one, where you can lay down your preferences and sacrificially serve someone in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a moment thinking about who you might encounter tomorrow, and how you could thoughtfully serve them. Is there anything you can do today to prepare for serving them tomorrow? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Although you are not one of Jesus’s disciples in first century Israel, what has Jesus done to sacrificially serve you? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 118,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-18",
          "content": "<p>&ldquo;True godliness does not turn men out of the world, but enables them to live better in it and excites their endeavors to mend it.&rdquo;</p>\n<p><strong>&mdash;William Penn</strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it’s a small one, where you can lay down your preferences and sacrificially serve someone in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Spend a moment thinking about who you might encounter tomorrow, and how you could thoughtfully serve them. Is there anything you can do today to prepare for serving them tomorrow? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What has been hard about serving others this week, and what has been rewarding? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 119,
          "title": "Fight self-absorption by serving someone.",
          "date": "2018-05-19",
          "content": "<p>&ldquo;Christian holiness is not a free-floating goodness removed from the world, a few feet above the ground. It is specific and, in some sense, tailored to who we particularly are...We can&rsquo;t be holy in the abstract. Instead we become a holy blacksmith or a holy mother or a holy physician or a holy systems analyst.&rdquo;</p>\n<p><strong>&mdash;Tish Harrison Warren, <em>Liturgy of the Ordinary</em></strong></p>\n<p>&nbsp;</p>\n<p>Look for an opportunity today, even if it’s a small one, where you can lay down your preferences and sacrificially serve someone in your life.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>Did you serve someone sacrificially today?</p>",
              "type": "boolean"
            },
            {
              "id": "",
              "title": "<p>What did you do for them? What was their reaction? (Take a moment to pray for them.)  </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What did you learn about yourself through serving others this week?</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What would it look like for you to become a “holy _______,” (fill in the blank with your current vocation)? What would your normal days look like if sacrificially serving those around you became a habit? </p>",
              "type": "textarea"
            }
          ]
        },
        {
          "id": 120,
          "title": "Reflect on God’s grace & plan for the future.",
          "date": "2018-05-20",
          "content": "<p>&ldquo;Insight is not change. It feels like change, but it is not.&rdquo;</p>\n<p><strong>&mdash;Steve Von Fange</strong></p>\n<p>&nbsp;</p>\n<p>Today is the last day of this series, but what you have learned doesn&rsquo;t have to stop here. Spend some time reflecting on the past several months, the challenges you participated in, and the spiritual disciplines you practiced.</p>",
          "questions": [
            {
              "id": "",
              "title": "<p>How has God grown you in this season? Ask God to point out areas of your life where you may have grown more than you even realize. Spend a few minutes praising him and thanking him for any areas of growth you’ve seen. </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>What were some of your favorite things from this series (Scripture, sermons, challenges, disciplines you started, etc.)? What did you learn? </p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Going forward, what changes do you need to make in your life to continue growing? What disciplines or practices do you need to make a consistent part of your life, and what is your plan for doing so?</p> \n\n<p>Hint: The more specific and actionable you can make your plan, the better. For example, instead of saying “I want to pray more,” a far more productive plan would be “I want to intentionally pray for 15 minutes per day, and I’ll do it right after I brush my teeth.” You’ll be much more likely to actually change if you create a specific plan rather than vague generalities. \n</p>",
              "type": "textarea"
            },
            {
              "id": "",
              "title": "<p>Are there any practical things you need to set up to follow through on that plan? (Use your calendar, set up reminders, accountability with other Christians, etc.) Spend some time praying through this and take time to set up anything that would be helpful. </p>",
              "type": "textarea"
            }
          ]
        }
      ];
}