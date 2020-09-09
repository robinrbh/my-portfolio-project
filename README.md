## 🏎️ Racing Valley | A platform where you can rent (and rent out) Racecars 🏎️

[Find out here for a working version]

## Table of contents

- [App demo](#App-demo)
- [Used technologies and concepts](#used-technologies-and-concepts)
- [Goals for this project](#goals-for-this-project)
- [User stories](#user-stories)
- [Project board](#project-board)
- [Wireframe](#wireframe)
- [Datamodel](#datamodel)
- [Git version control](#git-version-control)
- [Backend server repo](#backend-server-repo)

## App demo

![App demo]

## Used technologies and concepts

- React.js
- Redux for state management
- Express
- Axios
- Sequelize as ORM
- Bootstrap UI framework for lay-out
- Many-to-many models ✨
- Cloudinary for uploading images ✨

✨ _New technology learned during this project_

## Goals for this project

The goal of this project is to build a full-stack app, using both frontend and backend technologies. In this frontend repository I tried to:

- Build a working prototype in less than 2 weeks;
- Apply what we learned during Codaisseur's bootcamp;
- Showcase and document development skills using:
  - wireframes as Minimum Viable Product
  - user stories perspective
  - agile/kanban approach
  - transparant and structured git version control

## User stories

- As a **lurker** I want to be able to look at the homepage of the app and see a list of racecars that are for rent so I can see which racecars I can rent.
- As a **lurker** I want to be able to filter the list based on the brand of a racecar so I can see if the racecar I want to rent is availabe.
- As a **lurker** I want to be able to register an account so I can either rent a racecar or to offer my own racecars for rent.
- As a **racer** I want to be able to login to the website so I can book a racecar that I want to rent.
- As a **racer** I want to be able to view my bookings in my own profile page so I can see the details of my booking.
- As a **racer** I want to be able to view a vendors page so I can get more info about this vendor, for example:
  - The racecars he has that are for rent
  - On what racetracks he can deliver these cars
- As a **racer** I want to be able to rate vendors so other racers and lurkers can see which vendors are reliable.
  - I should be able to add a review to the vendor on his public profile page
  - I should be able to see the rating (number of 'stars') of a vendor on the overview page of vendors
- As a **vendor** I want to be able to login and view my dashboard so I can see all my bookings.
- As a **vendor** I want to be able to visit my dashboard and look at the list of my own racecars.
- As a **vendor** I want to be able to (on my dashboard) look at the details of each booking so I know which car needs to be ready for racing.
- _planned:_ As a **vendor** I want to be able to see data concerning the amount of income I generated from this website in a certain amount of time so I know how well my business is going. For example:

  - Total income
  - Income per month (in a chart)
  - Earnings per car
  - Most booked car

## Project Board

Go to [project board](https://github.com/robinrbh/racing-valley/projects/1)

## Wireframe

Go to [wireframe](https://wireframepro.mockflow.com/view/Ma5a61ca4283f438fbce0a6bfd8297a341598943337655)

## Datamodel

Go to [datamodel](<https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=database_model%20(8).drawio#R7V3vd6I4F%2F5r%2FNgeAoL6cWrbnXen3enpdmdn9sucVFLlLRJPSFvdv34DBEVCbRhRLoKnZwZCxHCfJw83N7961ni%2B%2FI3hxeyWusTvmYa77FmXPVN8jJH4L0pZJSmj%2FiBJmDLPTZLQJuFP718iEw2Z%2BuK5JNzKyCn1ubfYTpzQICATvpWGGaNv29meqL%2F9qws8JUrCnxPsq6l%2Fey6fyVTH7m8ufCbedJb%2BNHLkE89xmls%2BSjjDLn3bSiJLfk0DLst4R9gcByTg4sotZs%2BE9eyrGefRo37qmdfi7ynKfT6ldOoTvPDC8wmdi%2BRJKLJcP%2BG550d2ztzoQt5I%2FJx11bPGjFKeHM2XY%2BJHYKU4JGW6fufq2hAsuq%2FGF8Znr6ubZ4MHn9%2Bsb%2Fz2dno3eDyTd3nF%2Fos0sLQNX6UWJ64AQJ6Kn%2FL46p74mHs0uNpcuSCB%2BymCV2S6uv%2BXMPpAb3EgHv4i5JjxzTUayOzXniiedYnSLPLciK4uPf5dXouOf0Tp57Y8u1xmsl2u5IlqDvlsIX1hE%2Fks7PLLn%2FPAGH56YP%2B8XDm%2Fn%2BG7xZlpSx5jNiV8h7EsSRJ3i6LS2r8ROiecrUSGtwwxDcmsWZaTaSKLDfm6TW0s2Tdd33D9G3fUi8koa7Ntyror67Ll2Nu3SB5dfitLjfyNRts3Gqb1Ib1RYhrlRuIg8%2BCbpJh5xSz8e379z9dv9t3D7%2B7Y41%2FZz%2BAWnTn9g9AwoVqOf1vc3NDQyNEQ7UUpVECpwie3oHEKGc42F%2BxBjgu6pEIox6q%2BfWRW2SDFrVpWNUKohmhwbmQ%2BdkUMM4aj81Hms31fc5STw%2Br4Vmh1U6HbBaXPXjANFdoJ12MRHXL86K81SjpbVkQS4T5x7AXCUUhINKG%2BjxehF2dPUmae797gFX3h6Y3Ss4snb0nc%2B8TXivIKet6Im4WSgZHTkpI%2Buox9bxqI44lgZPSLF4yEoiw3OOQfKeErYZwsd5JMXu2nHmSKTvqOyZDQtItIODLe59sWhmUBsz7WhxQo8ejcw%2F69cGlxMI0x24YksqvL6OIhrZtRwiKiGmFXryTxKWPjCyUYU59GyAaJXsTZ4oezL8SfeNxx5O3YogBjcY425%2BIvys74mAYhZ9iL4SACqDcSgXXB6UL%2Bjk%2Be0mIwaczo%2BJFyLlzU92DdSeyPsU4dEU1orUMhq%2FoTd1%2FKYEvFsz75sajPPNclQVIloxYN3uBdAGWh%2Fdc2z4ORr4iaeFjaeGQAsI5pf%2FXNK7KL78Tq%2FcfXh%2Bjfv25ueuumGCRUUjlM8l6ECzwRIn6TfNPJwWYfArbl%2B9XIPCaMTpsFsthXq0YgnboFcqAge%2F0FlQH3SHVREwBHG4C6FHGoGJzhCWH%2FK5ZFcDh8qImVAwVFA0edBh5GA0d1a2DaIPlFaGEp4Ejb%2FHUpIFJjzZS5hF1iTkSym%2FzXChXUB6sGFSyMpQ1KOQed6r2rekg37HE4KJuhcjtpCEPmiouoRpUm%2BJT9vH2BgiJxCDmdxlWjcXbdGofQAGDl0qw7ayICVjmE1AatIOTkuW1CVwasGpSuuB9RDY%2BPMet6qcSVQSpT6z5ETSkzhwdDS6Mb%2B3TfU8W47qY1yH6q4iKrEfaGdlTtpi6IF1lxEdVIeLu6qvYFDsxLTXVIWiSTxe5lRTJ5zN6q4iLvF4Svzb3fTVS4ophW3Iy9HxkO3NjiTCjMCXr3%2B2IFRQfNLlJbkewds4OqGMoGq1yJpldtKqdGaudyvky7VK58M7n%2BYG1%2F2MlcNTJXf48U6o8A1i7V4LuZCEPpistoFzh0s0XLIrUlgAIjc3bnzVUlc%2FV3StnN8Od2MxG0zKkenUvCCfMW0YwucUGUnPfGZu9TI4N5B4AKjtD1O6GrSOiG9QudDbB6adcefYvXJ3Rqv9GUYPZIl5vG6%2BnLnD5QUGTO6VqtFancekGS2lTOaXCj1YHfZh2oTVZBcpe2bihlCaygyByySw2%2F63Ruh87169Y5ZJd6acESujUTASsdstXubW%2BOp%2BQvlu2LAAdBdY6cPkZQFM4yFci%2BxW%2BnbhRldBX96mIfZn7lqeoQ61b70KuOa2qDHEZZXOSTWe9jN3XhvsOstq%2F4sS9wUF5sXb96Vap4zFGTxVA2OEDRgE71oj71lzByvcKfAZ6T9kRiG9ix3i%2FVQ9HJHIxRksVQlpq2C0zmQE2QKS6iOkFmgcPwjTI3E5xoRyi2BFxQhG5UygnohA70OEkDohehafCUiIClDhkay%2BHXb%2FCq1KwEIlDUrN%2BmmN1h1az24ZB9C2Dd0nUE9O1dm9%2BmxkTJHHsnPbtlX6ygyJzVLbx7MN2rfXSkpTaoANY%2BXQDgL1VkqQsDtKl3vQRCUOQP6Sx5U9V%2BQPktW4xepVu2SPJ9uBEQSse7gdm0xUmVMt2mxcnhrb9NS25RJSfPnANvBIQKYlgH41PV%2B0sVP1H6AA3cYAr1c7z65e1%2FzByvbOPIvEpRyPDqXtim2%2FFHIp0bBWTr%2Bl4oLzXVvVoKJv2Xefk33LUuMehkQ%2B7mjANC5mkPBNqwF667jcxuKNCe0IHxw62ul7wqbax9NBCyGtxPvmYiZOErCOxM6Hye7B998nGGMhDBEbhutGNVAlf7OCBkNXi845qJkAUubbhvbWLGk66ktIkNy%2FrViVvzhjiifrd2UFXiBmDsT7mhD8DUra8fPKpP3dTI0HrC%2BamP4C4DEJiFbtVYz320pWYXe%2B1tmpult7EwjXMj80mjFtWj1%2B1qoaC8m%2BYgw7DFRT7tXS1MULGI4iJ2u1rsBxyYl1y3q8WhZLL2XS3MU9rVwgQVvygsYnrjjL2fPBbyP7Yma57eqNh98YKihVYXz6hI%2Bmrf2cJqsNJZoGIZxUVUQxk%2BbqnQlYALSuS2Wwq5Ip2rP2zb4IWQ4S%2BDrIYZWjrDqXEK1y0PWpXC1T6Ns8GLg8JfGlSNELR27Y3mrRGKnFIznDuZgzxrEzmlvHJYQrdmImCpQ07BuPEWzdMsgxEYhRtohLDBTdR851Gk%2BT%2BeqWlAm1LnpDPopFoOUA5w7Rl1KDejbnTsGXWpzkMhFFl6%2FHt0fD4aOfL8hzg%2FM86RPL1cZvJerjInd4R5wiLxsJI4LRDW%2BZ49%2BRHf2k5PN7eKz1ZlWD0%2Be13dPBs8%2BPxmfeO3t9O7wWPqP2pwegSM0wNzm4nWr84%2BHuSmm66nNR%2BL0o4apphgFv6c4fCncLkmz92ApQim%2FBxx3dAdOqBHst9KHQ136MvMS3T0F5kAM1fUUYdWNHSU0gfshezzq%2F5ju8Yp7Q0dnKaAhud2umJZqjFeWizrnzw6aMTKmLoIrLkKWBoHpmLx2Fts2%2FZ3ZcCCI4Zd5Lcq7at%2FXumgyZHfQQMivwM18itayO0TugYGgIfqmMxseE7oy4xOaYD9bGiO0ZfAJa603ybPDY0NHzVy%2Fk84X8mIB37hVCTN%2BDxdOC2NyqXHmTDauwG5wuCfEu5Tg4bb8cGyOqcRd5bYVLhCoHbobc%2FV0lUP5aGLZ70Tzxoamu%2BxA659ZnRrn2lW3zW1GxTPMk587TOjAZ6M0a19tid0YDwbo1uD%2FWBiWX88yzilRdg3XIUsjWp3S3Di81H2BguOGJZaWqvTPtDxLATR99A2%2BEjb4LVJHVI7SyYeX7VQ6vTBAiN1qHPzqpK6%2BqffIdTgTcbWVAStdWrUYUJfgqRULZO7EngdXu7EKaOUZwczMryY3VKXRDn%2BAw%3D%3D>)

## Git version control

I recognize the need for solid version control and try to:

- write clear commit messages
- name branches by feature
- do pull requests

## Backend server repo

The backend side of this project is an Express server using Sequelize to manage the underlying Postgres database. [Click here for more details](https://github.com/robinrbh/racing-valley-server)
