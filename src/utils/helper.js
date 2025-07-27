export    
      const containerVariants = {
        hidden: {opacity:0},
        visible:{
          opacity:1,
          transition:{
            staggerChildren:0.2,
            delayChildren:0.3,
          }
        }
      }
      //This defines animation "variants" for a container using Framer Motion. hidden: initial state with opacity 0 (invisible). visible: fades in with: staggerChildren: child animations will start one after another with a 0.2s gap.delayChildrem: likely a typo — it should be delayChildren, which delays the start of all child animations by 0.3s.


export const itemVariants = {
        hidden:{y:30,opacity:0},
        visible:{
          y:0,
          opacity:1,
          transition:{
            duration:0.8,
            ease:"easeOut",
          }
        }
      }
