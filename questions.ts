import { Question } from './types';

export const part1Questions: Question[] = [
  {
    id: 1,
    text: "Fluid is a substance that",
    options: [
      "Cannot be subjected to shear forces",
      "Always expands until it fills any container",
      "Has the same shear stress at a point regardless of its motion",
      "Cannot remain at rest under action of any shear force",
      "Flows"
    ],
    correctAnswer: 3,
    explanation: "A fluid is defined as a substance that deforms continuously (flows) when subjected to a shear stress, no matter how small the shear stress may be."
  },
  {
    id: 2,
    text: "Fluid is a substance which offers no resistance to change of",
    options: [
      "Pressure",
      "Flow",
      "Shape",
      "Volume",
      "Temperature"
    ],
    correctAnswer: 2,
    explanation: "Fluids have no definite shape and take the shape of the container. They offer no permanent resistance to change of shape (deformation)."
  },
  {
    id: 3,
    text: "Practical fluids",
    options: [
      "Are viscous",
      "Possess surface tension",
      "Are compressible",
      "Possess all the above properties",
      "Possess none of the above properties"
    ],
    correctAnswer: 3,
    explanation: "Real or practical fluids possess properties like viscosity, surface tension, and compressibility, unlike ideal fluids which are assumed to be devoid of these."
  },
  {
    id: 4,
    text: "In a static fluid",
    options: [
      "Resistance to shear stress is small",
      "Fluid pressure is zero",
      "Linear deformation is small",
      "Only normal stresses can exist",
      "Viscosity is nil"
    ],
    correctAnswer: 3,
    explanation: "Shear stresses cannot exist in a fluid at rest. Only normal stresses (pressure) exist, acting perpendicular to the surface."
  },
  {
    id: 5,
    text: "A fluid is said to be ideal, if it is",
    options: [
      "Incompressible",
      "Inviscous",
      "Viscous and incompressible",
      "Inviscous and compressible",
      "Inviscous and incompressible"
    ],
    correctAnswer: 4,
    explanation: "An ideal fluid is a hypothetical fluid that has zero viscosity (inviscid) and is incompressible (density is constant)."
  },
  {
    id: 6,
    text: "An ideal flow of any fluid must fulfill the following",
    options: [
      "Newton's law of motion",
      "Newton's law of viscosity",
      "Pascal's law",
      "Continuity equation",
      "Boundary layer theory"
    ],
    correctAnswer: 3,
    explanation: "The continuity equation, based on the principle of conservation of mass, must be satisfied for any flow (ideal or real) to be physically possible."
  },
  {
    id: 7,
    text: "If no resistance is encountered by displacement, such a substance is known as",
    options: [
      "Fluid",
      "Water",
      "Gas",
      "Perfect solid",
      "Ideal fluid"
    ],
    correctAnswer: 4,
    explanation: "An ideal fluid has zero viscosity, meaning there is no internal friction or resistance to displacement/flow."
  },
  {
    id: 8,
    text: "The volumetric change of the fluid caused by a resistance is known as",
    options: [
      "Volumetric strain",
      "Volumetric index",
      "Compressibility",
      "Adhesion",
      "Cohesion"
    ],
    correctAnswer: 2,
    explanation: "Compressibility is the measure of the relative volume change of a fluid or solid as a response to a pressure (or mean stress) change."
  },
  {
    id: 9,
    text: "Liquids",
    options: [
      "Cannot be compressed",
      "Occupy definite volume",
      "Are not affected by change in pressure and temperature",
      "Are not viscous",
      "None of the above"
    ],
    correctAnswer: 4,
    explanation: "While liquids have a specific volume, it changes slightly with temperature and pressure, so strictly speaking, the volume is not fixed under all conditions. However, compared to gases, they do."
  },
  {
    id: 10,
    text: "Density of water is maximum at",
    options: [
      "0°C",
      "0°K",
      "4°C",
      "100°C",
      "20°C"
    ],
    correctAnswer: 2,
    explanation: "Water exhibits anomalous expansion. Its density increases as it cools down to 4°C, reaching a maximum, and then decreases as it freezes."
  },
  {
    id: 11,
    text: "The value of mass density in kg·sec²/m⁴ for water at 0°C is",
    options: [
      "1",
      "1000",
      "100",
      "101.9",
      "91"
    ],
    correctAnswer: 3,
    explanation: "In the MKS gravitational system (Technical System), mass density is measured in kg·sec²/m⁴. With water density at 1000 kg/m³, dividing by g (9.81) gives approx 101.9."
  },
  {
    id: 12,
    text: "Property of a fluid by which its own molecules are attracted is called",
    options: [
      "Adhesion",
      "Cohesion",
      "Viscosity",
      "Compressibility",
      "Surface tension"
    ],
    correctAnswer: 1,
    explanation: "Cohesion is the force of attraction between molecules of the same substance."
  },
  {
    id: 13,
    text: "Mercury does not wet glass. This is due to property of liquid known as",
    options: [
      "Adhesion",
      "Cohesion",
      "Surface tension",
      "Viscosity",
      "Compressibility"
    ],
    correctAnswer: 2,
    explanation: "The cohesive forces within mercury are stronger than the adhesive forces between mercury and glass, causing it to ball up. This effect is a direct result of high surface tension."
  },
  {
    id: 14,
    text: "The property of a fluid which enables it to resist tensile stress is known as",
    options: [
      "Compressibility",
      "Surface tension",
      "Cohesion",
      "Adhesion",
      "Viscosity"
    ],
    correctAnswer: 2,
    explanation: "Cohesion is the intermolecular attraction between like-molecules, which allows a liquid to resist small tensile stresses (e.g., in a siphon)."
  },
  {
    id: 15,
    text: "Property of a fluid by which molecules of different kinds of fluids are attracted to each other is called",
    options: [
      "Adhesion",
      "Cohesion",
      "Viscosity",
      "Compressibility",
      "Surface tension"
    ],
    correctAnswer: 0,
    explanation: "Adhesion is the force of attraction between molecules of different substances (e.g., water and glass)."
  },
  {
    id: 16,
    text: "The specific weight of water is 1000 kg/m³",
    options: [
      "At normal pressure of 760 mm",
      "At 4°C temperature",
      "At mean sea level",
      "All the above",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "The value 1000 kg/m³ is the standard density of water taken at 4°C and standard atmospheric pressure conditions."
  },
  {
    id: 17,
    text: "Specific weight of water in S.I. units is equal to",
    options: [
      "1000 N/m³",
      "10000 N/m³",
      "9.81 x 10³ N/m³",
      "9.81 x 10⁶ N/m³",
      "9.81 N/m³"
    ],
    correctAnswer: 2,
    explanation: "Specific weight (γ) = Density (ρ) × Gravity (g) = 1000 kg/m³ × 9.81 m/s² = 9810 N/m³ = 9.81 × 10³ N/m³."
  },
  {
    id: 18,
    text: "When the flow parameters at any given instant remain same at every point, then flow is said to be",
    options: [
      "Quasi static",
      "Steady state",
      "Laminar",
      "Uniform",
      "Static"
    ],
    correctAnswer: 3,
    explanation: "Uniform flow is defined as flow where velocity and other hydrodynamic parameters do not change from point to point at any given instant."
  },
  {
    id: 19,
    text: "Which of the following is dimensionless?",
    options: [
      "Specific weight",
      "Specific volume",
      "Specific speed",
      "Specific gravity",
      "Specific viscosity"
    ],
    correctAnswer: 3,
    explanation: "Specific gravity is the ratio of the density of a fluid to the density of a standard fluid (water). Being a ratio of same units, it is dimensionless."
  },
  {
    id: 20,
    text: "The normal stress in a fluid will be constant in all directions at a point only if",
    options: [
      "It is incompressible",
      "It has uniform viscosity",
      "It has zero viscosity",
      "It is frictionless",
      "It is at rest"
    ],
    correctAnswer: 4,
    explanation: "Pascal's Law states that pressure at a point in a fluid at rest is the same in all directions."
  },
  {
    id: 21,
    text: "The pressure at a point in a fluid will not be same in all the directions when the fluid is",
    options: [
      "Moving",
      "Viscous",
      "Viscous and static",
      "Inviscous and moving",
      "Viscous and moving"
    ],
    correctAnswer: 4,
    explanation: "In a moving viscous fluid, shear stresses exist. The presence of shear stress means the normal stress (pressure) is not necessarily the same in all directions."
  },
  {
    id: 22,
    text: "An object having 10 kg mass weighs 9.81kg on a spring balance. The value of 'g' at this place is",
    options: [
      "10 m/sec²",
      "9.81 m/sec²",
      "10.2 m/sec²",
      "9.75 m/sec²",
      "9 m/sec²"
    ],
    correctAnswer: 0,
    explanation: "Weight readings on spring balances are often calibrated for standard gravity. A reading of 9.81 kgf typically implies standard weight. The question likely implies a unit consistency check where g comes out to ~10 m/s²."
  },
  {
    id: 23,
    text: "The tendency of a liquid surface to contract is due to the following property",
    options: [
      "Cohesion",
      "Adhesion",
      "Viscosity",
      "Surface tension",
      "Elasticity"
    ],
    correctAnswer: 3,
    explanation: "Surface tension is the elastic tendency of a fluid surface which makes it acquire the least surface area possible (contract)."
  },
  {
    id: 24,
    text: "The surface tension of mercury at normal temperature compared to that of water is",
    options: [
      "More",
      "Less",
      "Same",
      "More or less depending on size of glass tube",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Mercury has a very high surface tension (approx 0.48 N/m) compared to water (approx 0.073 N/m) due to strong metallic bonds."
  },
  {
    id: 25,
    text: "A perfect gas",
    options: [
      "Has constant viscosity",
      "Has zero viscosity",
      "Is incompressible",
      "Is of theoretical interest",
      "None of the above"
    ],
    correctAnswer: 4,
    explanation: "A perfect gas obeys the perfect gas law. It is compressible and has viscosity (which changes with temperature), distinguishing it from the options provided."
  },
  {
    id: 26,
    text: "For very great pressures, viscosity of most gases and liquids",
    options: [
      "Remains same",
      "Increases",
      "Decreases",
      "Shows erratic behavior",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "At very high pressures, the behavior of viscosity becomes complex and can show erratic or non-linear variations compared to standard conditions."
  },
  {
    id: 27,
    text: "A fluid in equilibrium can't sustain",
    options: [
      "Tensile stress",
      "Compressive stress",
      "Shear stress",
      "Bending stress",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "By definition, a fluid is a substance that cannot resist a shear stress when at rest. Any shear stress will cause it to flow."
  },
  {
    id: 28,
    text: "Viscosity of water in comparison to mercury is",
    options: [
      "Higher",
      "Lower",
      "Same",
      "Higher/lower depending on temperature",
      "Unpredictable"
    ],
    correctAnswer: 0,
    explanation: "While mercury has a higher dynamic viscosity, its much higher density means its kinematic viscosity (resistance to flow under gravity) is lower than that of water."
  },
  {
    id: 29,
    text: "The bulk modulus of elasticity with increase in pressure",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Increases first up to certain limit and then decreases",
      "Unpredictable"
    ],
    correctAnswer: 0,
    explanation: "As pressure increases, fluids become harder to compress further, meaning their bulk modulus (resistance to compression) increases."
  },
  {
    id: 30,
    text: "The bulk modulus of elasticity",
    options: [
      "Has the dimensions of 1/pressure",
      "Increases with pressure",
      "Is large when fluid is more compressible",
      "Is independent of pressure and viscosity",
      "Is directly proportional to flow"
    ],
    correctAnswer: 1,
    explanation: "As defined in the previous question, bulk modulus (K) typically increases as the pressure increases."
  },
  {
    id: 31,
    text: "A balloon lifting in air follows the following principle",
    options: [
      "Law of gravitation",
      "Archimedes principle",
      "Principle of buoyancy",
      "All of the above",
      "Continuity equation"
    ],
    correctAnswer: 3,
    explanation: "The lifting is due to Buoyancy (Archimedes' principle) overcoming Gravitation. So all principles are involved."
  },
  {
    id: 32,
    text: "The value of the coefficient of compressibility for water at ordinary pressure and temperature in kg/cm² is equal to",
    options: [
      "1000",
      "2100",
      "2700",
      "10,000",
      "21,000"
    ],
    correctAnswer: 4,
    explanation: "The Bulk Modulus (often confused with coefficient of compressibility in older texts) for water is approximately 2.1 x 10^4 kg/cm² or 2.1 GPa."
  },
  {
    id: 33,
    text: "The increase of temperature results in",
    options: [
      "Increase in viscosity of gas",
      "Increase in viscosity of liquid",
      "Decrease in viscosity of gas",
      "Decrease in viscosity of liquid",
      "(a) and (d) above"
    ],
    correctAnswer: 4,
    explanation: "In liquids, increased temperature reduces cohesive forces, lowering viscosity. In gases, it increases viscosity due to increased molecular momentum exchange."
  },
  {
    id: 34,
    text: "Surface tension has the units of",
    options: [
      "Newtons/m",
      "Newtons/m²",
      "New tons/m³",
      "Newtons",
      "Newton m"
    ],
    correctAnswer: 0,
    explanation: "Surface tension is defined as force per unit length (N/m)."
  },
  {
    id: 35,
    text: "Surface tension",
    options: [
      "Acts in the plane of the interface normal to any line in the surface",
      "Is also known as capillarity",
      "Is a function of the curvature of the interface",
      "Decreases with fall in temperature",
      "Has no units"
    ],
    correctAnswer: 0,
    explanation: "Surface tension acts along the surface (in the plane) and perpendicular to any line drawn on the surface."
  },
  {
    id: 36,
    text: "The stress-strain relation of the Newtonian fluid is",
    options: [
      "Linear",
      "Parabolic",
      "Hyperbolic",
      "Inverse type",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "For a Newtonian fluid, the shear stress is directly proportional (linear relationship) to the rate of shear strain (velocity gradient)."
  },
  {
    id: 37,
    text: "A liquid compressed in cylinder has a volume of 0.04 m³ at 50 kg/cm² and a volume of 0.039 m³ at 150 kg/cm². The bulk modulus of elasticity of liquid is",
    options: [
      "400 kg/cm²",
      "4000 kg/cm²",
      "40 x 10⁵ kg/cm²",
      "40 x 10⁶ kg/cm²",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Bulk Modulus K = -V (dP/dV) = -0.04 * ((150-50)/(0.039-0.04)) = 4000 kg/cm²."
  },
  {
    id: 38,
    text: "The units of viscosity are",
    options: [
      "Metres² per sec",
      "Kg sec/metre²",
      "Newton-sec per metre²",
      "Newton-sec per meter",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "In the metric gravitational system, the unit of dynamic viscosity is kg(f)·sec/m². In SI it is N·s/m²."
  },
  {
    id: 39,
    text: "Kinematic viscosity is dependent upon",
    options: [
      "Pressure",
      "Distance",
      "Level",
      "Flow",
      "Density"
    ],
    correctAnswer: 4,
    explanation: "Kinematic viscosity is defined as the ratio of dynamic viscosity to density (ν = μ/ρ)."
  },
  {
    id: 40,
    text: "Units of surface tension are",
    options: [
      "Energy/unit area",
      "Distance",
      "Both of the above",
      "It has no units",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Surface tension can be expressed as Force per unit length (N/m) or Energy per unit area (J/m²)."
  },
  {
    id: 41,
    text: "Which of the following meters is not associated with viscosity",
    options: [
      "Red wood",
      "Say bolt",
      "Engler",
      "Orsat",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "Redwood, Saybolt, and Engler are types of viscometers. The Orsat apparatus is used for the analysis of flue gases."
  },
  {
    id: 42,
    text: "Choose the correct relationship",
    options: [
      "Specific gravity = gravity x density",
      "Dynamic viscosity = kinematic viscosity x density",
      "Gravity = specific gravity x density",
      "Kinematic viscosity = dynamic viscosity x density",
      "Hydrostatic force = surface tension x gravity"
    ],
    correctAnswer: 1,
    explanation: "Kinematic viscosity (ν) = Dynamic viscosity (μ) / Density (ρ). Therefore, μ = ν × ρ."
  },
  {
    id: 43,
    text: "Dimensions of surface tension are",
    options: [
      "ML⁰T⁻²",
      "ML⁰T¹",
      "MLr²",
      "ML²T²",
      "ML⁰t"
    ],
    correctAnswer: 0,
    explanation: "Surface Tension is Force/Length. [MLT^-2] / [L] = [MT^-2] = [ML^0T^-2]."
  },
  {
    id: 44,
    text: "For manometer, a better liquid combination is one having",
    options: [
      "Higher surface tension",
      "Lower surface tension",
      "Surface tension is no criterion",
      "High density and viscosity",
      "Low density and viscosity"
    ],
    correctAnswer: 0,
    explanation: "Higher surface tension helps in maintaining a distinct meniscus and minimizing capillary errors in certain manometric applications."
  },
  {
    id: 45,
    text: "If mercury in a barometer is replaced by water, the height of 3.75 cm of mercury will be following cm of water",
    options: [
      "51 cm",
      "50 cm",
      "52 cm",
      "52.2 cm",
      "51.7 cm"
    ],
    correctAnswer: 0,
    explanation: "Height of water column = Height of Hg × (Specific Gravity of Hg / Specific Gravity of Water) = 3.75 × 13.6 = 51 cm."
  },
  {
    id: 46,
    text: "Alcohol is used in manometer, because",
    options: [
      "Its vapour pressure is low",
      "It provides suitable meniscus for the inclined tube",
      "Its density is less",
      "It provides longer length for a given pressure difference",
      "It provides accurate readings"
    ],
    correctAnswer: 3,
    explanation: "Alcohol has a low density. For a given pressure difference (P = ρgh), a lower density (ρ) results in a larger height (h), making readings more sensitive."
  },
  {
    id: 47,
    text: "Increase in pressure at the outer edge of a drum of radius R due to rotation at ω rad/sec, full of liquid of density ρ will be",
    options: [
      "ρω²/R²",
      "ρω²R²/2",
      "2ρα²R²",
      "ρα²R/2",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "The pressure rise due to forced vortex motion is given by P = (ρ/2) * (v²) = (ρ/2) * (ωR)² = ρω²R²/2."
  },
  {
    id: 48,
    text: "The property of fluid by virtue of which it offers resistance to shear is called",
    options: [
      "Surface tension",
      "Adhesion",
      "Cohesion",
      "Viscosity",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Viscosity is the measure of a fluid's internal resistance to flow or shear stress."
  },
  {
    id: 49,
    text: "Choose the wrong statement",
    options: [
      "Fluids are capable of flowing",
      "Fluids conform to the shape of the containing vessels",
      "When in equilibrium, fluids cannot sustain tangential forces",
      "When in equilibrium, fluids can sustain shear forces",
      "Fluids have some degree of compressibility and offer little resistance to form"
    ],
    correctAnswer: 3,
    explanation: "By definition, a fluid at rest (in equilibrium) cannot sustain any shear force. Statement (d) contradicts this."
  },
  {
    id: 50,
    text: "The density of water is 1000 kg/m³ at",
    options: [
      "0°C",
      "0°K",
      "4°C",
      "20°C",
      "All temperature"
    ],
    correctAnswer: 2,
    explanation: "The density of water is maximum and taken as standard 1000 kg/m³ at 4°C."
  }
];

export const part2Questions: Question[] = [
  {
    id: 51,
    text: "A manometer is used to measure",
    options: [
      "Atmospheric pressure",
      "Pressure in pipes",
      "Difference of pressures between two points",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "Manometers can measure gauge pressure (simple manometer), differential pressure (differential manometer), and even atmospheric pressure (barometer)."
  },
  {
    id: 52,
    text: "The resultant hydrostatic force on a submerged plane surface acts through",
    options: [
      "Center of gravity",
      "Center of pressure",
      "Center of mass",
      "Metacenter",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "The total hydrostatic force acts at the Center of Pressure, which is always below the Center of Gravity for inclined or vertical surfaces."
  },
  {
    id: 53,
    text: "Center of pressure of a plane surface immersed in a liquid is",
    options: [
      "Always above C.G.",
      "Always below C.G.",
      "At the same point as C.G.",
      "Depends on the liquid",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Since pressure increases with depth, the effective point of application of force (Center of Pressure) is always lower than the centroid (Center of Gravity)."
  },
  {
    id: 54,
    text: "The upward force exerted by a fluid on a body floating or submerged in it is called",
    options: [
      "Buoyancy",
      "Metacentric height",
      "Gravity",
      "Center of pressure",
      "Viscosity"
    ],
    correctAnswer: 0,
    explanation: "Buoyancy is the upward force exerted by a fluid that opposes the weight of a partially or fully immersed object."
  },
  {
    id: 55,
    text: "A floating body is in stable equilibrium if its metacenter is",
    options: [
      "Below the center of gravity",
      "Above the center of gravity",
      "Coincident with center of gravity",
      "At the center of buoyancy",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "For stable equilibrium of a floating body, the Metacenter (M) must be above the Center of Gravity (G), providing a restoring couple."
  },
  {
    id: 56,
    text: "The continuity equation is based on the principle of conservation of",
    options: [
      "Mass",
      "Energy",
      "Momentum",
      "Force",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "The continuity equation states that mass cannot be created or destroyed; hence, mass flow rate is constant in a steady flow."
  },
  {
    id: 57,
    text: "Flow where the velocity at any given time does not change with respect to space is called",
    options: [
      "Steady flow",
      "Uniform flow",
      "Compressible flow",
      "Rotational flow",
      "Laminar flow"
    ],
    correctAnswer: 1,
    explanation: "Uniform flow occurs when flow parameters (like velocity) do not change with respect to space (distance) at a given instant."
  },
  {
    id: 58,
    text: "Bernoulli's equation is based on the assumption that",
    options: [
      "The flow is irrotational",
      "The fluid is non-viscous",
      "The fluid is incompressible",
      "The flow is steady",
      "All of the above"
    ],
    correctAnswer: 4,
    explanation: "Bernoulli's equation assumes the fluid is ideal (inviscid, incompressible) and the flow is steady and irrotational along a streamline."
  },
  {
    id: 59,
    text: "Euler's equation for motion of liquids is based on the assumption that",
    options: [
      "Flow is streamlined",
      "Flow is turbulent",
      "Fluid is viscous",
      "Fluid is homogeneous and non-viscous",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "Euler's equation of motion considers pressure and gravity forces, neglecting viscous forces, thus assuming the fluid is inviscid."
  },
  {
    id: 60,
    text: "A Venturimeter is used to measure",
    options: [
      "Pressure",
      "Discharge",
      "Velocity",
      "Viscosity",
      "Density"
    ],
    correctAnswer: 1,
    explanation: "A Venturimeter is a flow measurement device used to determine the flow rate (discharge) of fluid through a pipe."
  },
  {
    id: 61,
    text: "In a Venturimeter, the divergent cone angle is kept smaller than the convergent cone angle to avoid",
    options: [
      "Cavitation",
      "Flow separation",
      "Energy loss",
      "Both b and c",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "A small divergence angle (usually 5-7 degrees) prevents boundary layer separation and minimizes energy losses due to eddy formation."
  },
  {
    id: 62,
    text: "Pitot tube is used to measure",
    options: [
      "Pressure",
      "Flow",
      "Velocity at a point",
      "Discharge",
      "Viscosity"
    ],
    correctAnswer: 2,
    explanation: "A Pitot tube measures the stagnation pressure, which allows the calculation of the local velocity at a specific point in the flow."
  },
  {
    id: 63,
    text: "The theoretical value of coefficient of contraction for a sharp edged orifice is approximately",
    options: [
      "0.611",
      "0.64",
      "0.98",
      "1.0",
      "0.5"
    ],
    correctAnswer: 0,
    explanation: "The theoretical coefficient of contraction (Cc) for a sharp-edged circular orifice is approximately pi/(pi+2) ≈ 0.611."
  },
  {
    id: 64,
    text: "The ratio of actual discharge to theoretical discharge is known as",
    options: [
      "Coefficient of contraction",
      "Coefficient of velocity",
      "Coefficient of discharge",
      "Coefficient of resistance",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Coefficient of discharge (Cd) = Actual Discharge / Theoretical Discharge. It accounts for losses in velocity and contraction of the jet."
  },
  {
    id: 65,
    text: "According to Reynolds, the flow is laminar if Reynolds number is",
    options: [
      "Less than 2000",
      "More than 2000",
      "More than 4000",
      "Between 2000 and 4000",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "For flow in pipes, if the Reynolds number (Re) is less than 2000, the flow is generally considered laminar."
  },
  {
    id: 66,
    text: "The flow is turbulent when Reynolds number is",
    options: [
      "Less than 2000",
      "Between 2000 and 4000",
      "More than 4000",
      "Equal to 2000",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Flow is fully turbulent in a pipe when the Reynolds number exceeds 4000."
  },
  {
    id: 67,
    text: "For laminar flow through a round pipe, the velocity distribution is",
    options: [
      "Linear",
      "Parabolic",
      "Logarithmic",
      "Hyperbolic",
      "Uniform"
    ],
    correctAnswer: 1,
    explanation: "In laminar flow, the velocity profile is parabolic, with maximum velocity at the center and zero at the walls."
  },
  {
    id: 68,
    text: "The loss of head due to friction in a pipe of length L and diameter D is given by Darcy-Weisbach formula as",
    options: [
      "4fLV²/2gD",
      "fLV²/2gD",
      "4fLV/2gD²",
      "fLV²/gD",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "The Darcy-Weisbach equation is hf = 4fL(V^2)/(2gD) where 'f' is the friction coefficient, or hf = fL(V^2)/(2gD) where 'f' is friction factor. Usually 4f is used."
  },
  {
    id: 69,
    text: "Hydraulic gradient line represents the sum of",
    options: [
      "Pressure head and kinetic head",
      "Kinetic head and datum head",
      "Pressure head and datum head",
      "Pressure, kinetic and datum heads",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "The Hydraulic Gradient Line (HGL) represents the sum of pressure head (P/w) and datum head (z)."
  },
  {
    id: 70,
    text: "Total energy line represents the sum of",
    options: [
      "Pressure head and kinetic head",
      "Kinetic head and datum head",
      "Pressure head and datum head",
      "Pressure, kinetic and datum heads",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "The Total Energy Line (TEL) represents the total head: Pressure Head + Velocity (Kinetic) Head + Datum Head."
  },
  {
    id: 71,
    text: "Chezy's formula is used to calculate",
    options: [
      "Head loss due to friction",
      "Velocity of flow",
      "Discharge",
      "Pressure drop",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Chezy's formula, V = C * sqrt(mi), calculates the uniform flow velocity in open channels and pipes."
  },
  {
    id: 72,
    text: "The ratio of area of cross-section to the wetted perimeter is known as",
    options: [
      "Hydraulic depth",
      "Hydraulic radius",
      "Hydraulic diameter",
      "Section factor",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Hydraulic radius (R) or Hydraulic mean depth (m) is defined as Area (A) / Wetted Perimeter (P)."
  },
  {
    id: 73,
    text: "Loss of head due to sudden expansion of pipe is given by",
    options: [
      "(V1-V2)²/2g",
      "V1²/2g - V2²/2g",
      "(V1²-V2²)/2g",
      "(V1-V2)/2g",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "The Borda-Carnot equation gives the head loss due to sudden expansion as (V1 - V2)^2 / 2g."
  },
  {
    id: 74,
    text: "Power transmitted through a pipe is maximum when the loss of head due to friction is",
    options: [
      "One-half of total head",
      "One-third of total head",
      "One-fourth of total head",
      "Equal to total head",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "For maximum power transmission through a pipe, the head loss due to friction should be one-third of the total supply head (H/3)."
  },
  {
    id: 75,
    text: "Hammer blow in pipes occurs due to",
    options: [
      "Excessive leakage",
      "Sudden opening of valve",
      "Sudden closure of valve",
      "Gradual closure of valve",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Water hammer is a pressure surge caused when a fluid in motion is forced to stop or change direction suddenly (e.g., sudden valve closure)."
  },
  {
    id: 76,
    text: "Momentum equation is based on",
    options: [
      "Conservation of mass",
      "Conservation of energy",
      "Conservation of momentum",
      "Newton's second law of motion",
      "Both c and d"
    ],
    correctAnswer: 4,
    explanation: "The momentum equation is derived from Newton's Second Law and represents the principle of conservation of momentum."
  },
  {
    id: 77,
    text: "A notch is used to measure",
    options: [
      "Pressure",
      "Discharge in pipes",
      "Discharge in open channels",
      "Velocity",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "A notch is a device used for measuring the rate of flow of a liquid through a small channel or a tank."
  },
  {
    id: 78,
    text: "Discharge over a rectangular notch is proportional to",
    options: [
      "H",
      "H^(1/2)",
      "H^(3/2)",
      "H^(5/2)",
      "H^2"
    ],
    correctAnswer: 2,
    explanation: "For a rectangular notch, Q = (2/3) * Cd * L * sqrt(2g) * H^(3/2)."
  },
  {
    id: 79,
    text: "Discharge over a triangular notch (V-notch) is proportional to",
    options: [
      "H",
      "H^(1/2)",
      "H^(3/2)",
      "H^(5/2)",
      "H^2"
    ],
    correctAnswer: 3,
    explanation: "For a triangular notch, Q = (8/15) * Cd * tan(theta/2) * sqrt(2g) * H^(5/2)."
  },
  {
    id: 80,
    text: "The main advantage of a V-notch over a rectangular notch is",
    options: [
      "It can measure large discharge",
      "It measures low discharge accurately",
      "It is easier to construct",
      "It is cheaper",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "A V-notch gives more accurate results for low discharges because the head (H) is larger for a small discharge compared to a rectangular notch."
  },
  {
    id: 81,
    text: "If the Reynolds number is less than 2000, the friction factor 'f' for laminar flow is given by",
    options: [
      "64/Re",
      "16/Re",
      "0.079/Re^0.25",
      "0.316/Re^0.25",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow, the friction factor f = 64/Re."
  },
  {
    id: 82,
    text: "For turbulent flow in smooth pipes, Blasius equation for friction factor is",
    options: [
      "64/Re",
      "0.316/Re^0.25",
      "16/Re",
      "0.0032 + 0.221/Re^0.237",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "The Blasius equation approximates the friction factor for turbulent flow in smooth pipes as f = 0.316 / Re^0.25."
  },
  {
    id: 83,
    text: "Separation of flow occurs when",
    options: [
      "Pressure intensity reaches a minimum",
      "The boundary layer comes to rest",
      "The velocity of sound is reached",
      "The cross-section of a pipe is reduced",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Separation occurs when the boundary layer travels far enough against an adverse pressure gradient that the speed of the boundary layer relative to the object falls to zero."
  },
  {
    id: 84,
    text: "Drag is the force exerted by the fluid on the body in the direction",
    options: [
      "Perpendicular to motion",
      "Parallel to motion",
      "At 45 degrees to motion",
      "Opposite to motion",
      "Both b and d"
    ],
    correctAnswer: 1,
    explanation: "Drag is the component of force exerted by the fluid on the body parallel to the direction of motion (or flow)."
  },
  {
    id: 85,
    text: "Lift is the force exerted by the fluid on the body in the direction",
    options: [
      "Perpendicular to motion",
      "Parallel to motion",
      "At 45 degrees to motion",
      "Opposite to motion",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Lift is the component of force exerted by the fluid on the body perpendicular to the direction of flow."
  },
  {
    id: 86,
    text: "Metacentric height is the distance between",
    options: [
      "Center of gravity and center of buoyancy",
      "Center of gravity and metacenter",
      "Center of buoyancy and metacenter",
      "Center of pressure and metacenter",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "Metacentric height (GM) is the vertical distance between the center of gravity (G) and the metacenter (M)."
  },
  {
    id: 87,
    text: "The imaginary line drawn in the fluid in such a way that the tangent to any point gives the direction of motion at that point is known as",
    options: [
      "Path line",
      "Streak line",
      "Filament line",
      "Stream line",
      "Potential line"
    ],
    correctAnswer: 3,
    explanation: "A streamline is a curve that is instantaneously tangent to the velocity vector of the flow."
  },
  {
    id: 88,
    text: "The coefficient of discharge (Cd) for a Venturimeter is approximately",
    options: [
      "0.6 to 0.7",
      "0.7 to 0.8",
      "0.8 to 0.9",
      "0.95 to 0.99",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "Venturimeters are very efficient with low losses, so Cd is typically high, between 0.95 and 0.99."
  },
  {
    id: 89,
    text: "The coefficient of discharge (Cd) for an Orifice meter is approximately",
    options: [
      "0.60 to 0.65",
      "0.95 to 0.99",
      "0.70 to 0.80",
      "0.50 to 0.60",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Orifice meters have higher losses due to sudden contraction and expansion, resulting in a lower Cd, typically around 0.60-0.65."
  },
  {
    id: 90,
    text: "Kinetic energy correction factor (alpha) for laminar flow in a circular pipe is",
    options: [
      "1.33",
      "2.0",
      "1.0",
      "1.5",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "For laminar flow in a pipe with a parabolic velocity profile, the kinetic energy correction factor is 2.0."
  },
  {
    id: 91,
    text: "Momentum correction factor (beta) for laminar flow in a circular pipe is",
    options: [
      "1.33",
      "2.0",
      "1.0",
      "1.5",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow in a pipe, the momentum correction factor is 4/3 or approximately 1.33."
  },
  {
    id: 92,
    text: "A syphon is used to",
    options: [
      "Connect two reservoirs at different levels separated by a hill",
      "Supply water to a town from a higher reservoir",
      "Empty a tank",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: 3,
    explanation: "A syphon is a long bent pipe used to transfer liquid from a higher level to a lower level over an obstacle (like a hill)."
  },
  {
    id: 93,
    text: "The maximum vacuum pressure at the summit of a syphon should not exceed",
    options: [
      "2.5 m of water",
      "5.0 m of water",
      "7.8 m of water",
      "10.3 m of water",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "The theoretical limit is 10.3m (atmospheric), but practically it is limited to about 7.8m or roughly 8m of water to prevent cavitation and air lock."
  },
  {
    id: 94,
    text: "The velocity of a fluid particle at the center of the pipe for laminar flow is",
    options: [
      "Equal to average velocity",
      "Twice the average velocity",
      "Half the average velocity",
      "1.5 times average velocity",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: "In laminar pipe flow, the maximum velocity (at the center) is exactly twice the average velocity."
  },
  {
    id: 95,
    text: "Froude number is the ratio of inertia force to",
    options: [
      "Viscous force",
      "Gravity force",
      "Pressure force",
      "Elastic force",
      "Surface tension force"
    ],
    correctAnswer: 1,
    explanation: "Froude number (Fr) is a dimensionless number defined as the ratio of flow inertia to the external field (gravity)."
  },
  {
    id: 96,
    text: "Reynolds number is the ratio of inertia force to",
    options: [
      "Viscous force",
      "Gravity force",
      "Pressure force",
      "Elastic force",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Reynolds number (Re) is the ratio of inertial forces to viscous forces."
  },
  {
    id: 97,
    text: "Weber number is the ratio of inertia force to",
    options: [
      "Viscous force",
      "Gravity force",
      "Pressure force",
      "Surface tension force",
      "Elastic force"
    ],
    correctAnswer: 3,
    explanation: "Weber number (We) is the dimensionless number representing the ratio of fluid inertia to surface tension."
  },
  {
    id: 98,
    text: "Mach number is the ratio of inertia force to",
    options: [
      "Viscous force",
      "Gravity force",
      "Elastic force",
      "Surface tension force",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Mach number (M) is the ratio of flow velocity to the speed of sound, which relates to the ratio of inertia force to elastic force."
  },
  {
    id: 99,
    text: "Euler number is the ratio of pressure force to",
    options: [
      "Inertia force",
      "Viscous force",
      "Gravity force",
      "Elastic force",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Euler number (Eu) relates the pressure force to the inertial force."
  },
  {
    id: 100,
    text: "Cavitation will begin when",
    options: [
      "The pressure at any location reaches an absolute pressure equal to the saturated vapour pressure",
      "Pressure becomes more than critical pressure",
      "Flow is increased",
      "Pressure is increased",
      "None of the above"
    ],
    correctAnswer: 0,
    explanation: "Cavitation occurs when the local static pressure drops below the vapor pressure of the liquid, causing vapor bubbles to form."
  }
];