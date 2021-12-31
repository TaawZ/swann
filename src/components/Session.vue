<template>
	<v-container>
		<v-card class="pa-16" color="#f2f3f2" elevation="10">
			<v-row justify="center">
				<h1>Le déroulement d'une séance</h1>
			</v-row>
			<v-col>
				<h2>Étape 1 : Anamnèse/ recueil des informations</h2>
				<p>La séance d'ostéopathie commence toujours par un recueil des informations de l'animal, cela permet à l'ostéopathe d'avoir des pistes de recherche et une vision globale de la vie de l'animal.</p>
				<p>C'est une série de question pour connaître : le prénom, l'âge, la race et les antécédents de votre animal (ex: traumatisme), soucis vétérinaires, son mode de vie (alimentation, sortie, où il vit...), s'il est à jour de ces vaccins et vermifuge....</p>
				<p>La question principale est le motif de la consultation : un problème particulier (ex: il tourne moins bien à droite), un bilan annuel.</p>
			</v-col>
			<v-col>
				<h2>Étape 2 : examen statique</h2>

				<span>Étape 1 : observation de l'animal :</span>
				<p>que voit-on à l'oeil ? (ex: une asymétrie musculaire) , quel est le comportement de l'animal ? (ex: joueur, attentif...)</p>

				<span>Étape 2 : un examen palpatoire global :</span>
				<p>l'ostéopathe passe ses mains sur tout le corps de l'animal, pour ressentir les chaleurs/froideurs, densités, tensions, et apprécier la qualité du tissus.</p>

				<span>Étape 3 : examen des aplombs :</span>
				<p>plus ou moins réalisable chez les espèces, le cheval/bovin : oui. chien/chat cela dépend de l'animal. L'ostéopathe observe comment se place l'animal debout sur un sol plat.</p>
			</v-col>

			<v-col>
				<h2>Étape 3 : examen dynamique</h2>
				<p>Lors de celui-ci l'ostéopathe observe comment se déplace votre animal, au pas et au trot sur une ligne droite. Est ce-qu'il utilise plus un membre qu'un autre ? Le dos fonctionne-t-il correctement ?</p>
				<p>Cela permet d'avoir des informations sur la mobilité des articulations les unes par rapport aux autres.</p>
			</v-col>
			<v-col>
				<h2>Étape 4 : les testings</h2>
				<p>
					Cette étape se déroule en deux temps : <br />
					Un premier temps : l'ostéopathe teste les articulations de votre animal. <br />
					Un deuxième temps : il fait une écoute crânienne, pour faire un bilan de la sphère crânienne. Et une écoute des viscères pour faire un état des lieux du système digestif.
				</p>
			</v-col>

			<v-col>
				<h2>Étape 5 : le diagnostique</h2>
				<p>Les 4 premières étapes permettent à l'ostéopathe d'avoir un ensemble d'informations globales sur l'animal. Pour faire une chaine dysfonctionnelle théorique qui explique comment le corps s'est positionné.</p>
				<p>
					L'ostéopathe décide si l'animal peut être traiter en ostéopathie. Et si oui, comment va se dérouler le traitement. <br />
					S'il y a des contre-indications, l'ostéopathe vous conseillera le professionnel adapté.
				</p>
				<p>Avec votre accord, il traitera l'animal.</p>
			</v-col>
			<v-col>
				<h2>Étape 6 : les manipulations/ le traitement</h2>
				<p>
					les manipulations dépendent du patient, elles se font dans le respect du tissus et du corps de l'animal. <br />
					Dans le cas ou les dysfonctions sont trop ancrées, il faudra plusieurs séances pour traiter l'animal. En effet toutes les soulever en même temps pourraient être trop fatiguant pour le corps de l'animal.
				</p>
				<p>
					L'ostéopathie permet au corps de retrouver le chemin de l'autorégulation. <br />
					Après un traitement ostéopathique, l'animal sera fatigué. <br />
					Après la séance, l'ostéopathe vous expliquera quelle rééducation adoptée pour éviter que les dysfonctions reviennent. En général il demandera que l'animal soit au repos quelque jours avant de commencer la rééducation.
				</p>
			</v-col>
		</v-card>
		<v-card color="primary">
			<v-col class="pa-16" align="center">
				<h1>Le devoir du praticien n'est pas de guérir la maladie mais ajuster une partie ou l'ensemble du système afin que les fleuves de la vie puissent s'écouler et irriguer les champs desséchés</h1>
				<span class="white--text">Andrew Taylor STILL </span>
			</v-col>
		</v-card>
	</v-container>
</template>

<style scoped>
h1 {
	color: #80767a;
	font-size: 24px;
	margin-bottom: 40px;
}
h2 {
	padding-bottom: 10px;
	color: #a01037;
}

p {
	color: #80767a;
}

span {
	color: black;
}
</style>
