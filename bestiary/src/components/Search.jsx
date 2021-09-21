//imrs
const search = () => {
  console.log("test search");
  return (
    <main>
      <form>
        <label> name </label>
        <input type="text" />
        <label> Type </label>
        <select>
          <option value="any"> any type</option>
          <option value="aberration"> aberration</option>
          <option value="beast"> beast</option>
          <option value="celestial"> celestial</option>
          <option value="construct"> construct</option>
          <option value="dragon"> dragon</option>
          <option value="elemental"> elemental</option>
          <option value="fey"> fey</option>
          <option value="fiend"> fiend</option>
          <option value="giant"> giant</option>
          <option value="humanoid"> humanoid</option>
          <option value="monstrosity"> monstrosity</option>
          <option value="ooze"> ooze</option>
          <option value="plant"> plant</option>
          <option value="undead"> undead</option>
        </select>

        <label> Size </label>
        <select>
          <option value="any"> any size</option>
          <option value="tiny"> tiny</option>
          <option value="Small"> Small</option>
          <option value="medium"> medium</option>
          <option value="large"> large</option>
          <option value="huge"> huge</option>
          <option value="gargantuan"> gargantuan</option>
        </select>

        <label> alignment </label>
        <select>
          <option value="any alignment">any alignment</option>
          <option value="unaligned"> unaligned</option>
          <option value="lawful good"> lawful good</option>
          <option value="neutral good"> neutral good</option>
          <option value="chaotic good"> chaotic good</option>
          <option value="lawful neutral"> lawful neutral</option>
          <option value="neutral"> neutral</option>
          <option value="chaotic neutral"> chaotic neutral</option>
          <option value="lawful evil"> lawful evil</option>
          <option value="neutral evil"> neutral evil</option>
          <option value="chaotic evil"> chaotic evil</option>
        </select>
      </form>

      <button>Search🔎</button>
    </main>
  );
};

export default search;
