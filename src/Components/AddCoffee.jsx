import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    //create object
    const newcoffee = { name, chef, supplier, test, category, details, photo };
    console.log(newcoffee);

    // send the data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newcoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-6xl text-black font-extrabold">Add Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* form name and chef*/}
        <div className="md:flex mb-6">
          <fieldset className="fieldset md:w-1/2">
            <legend className="fieldset-legend text-black text-2xl">
              Coffee Name
            </legend>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Type Coffee name"
            />
          </fieldset>

          <fieldset className="fieldset md:w-1/2 ml-4">
            <legend className="fieldset-legend text-black text-2xl">
              Chef
            </legend>
            <input
              type="text"
              name="chef"
              className="input w-full"
              placeholder="Type Coffee Taste"
            />
          </fieldset>
        </div>
        {/* form Supplier and test */}
        <div className="md:flex mb-6">
          <fieldset className="fieldset md:w-1/2">
            <legend className="fieldset-legend text-black text-2xl">
              Supplier
            </legend>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Type Supplier"
            />
          </fieldset>

          <fieldset className="fieldset md:w-1/2 ml-4">
            <legend className="fieldset-legend text-black text-2xl">
              Test
            </legend>
            <input
              type="text"
              name="test"
              className="input w-full"
              placeholder="Type Coffee Test"
            />
          </fieldset>
        </div>
        {/* form Category and Details */}
        <div className="md:flex mb-6">
          <fieldset className="fieldset md:w-1/2">
            <legend className="fieldset-legend text-black text-2xl">
              Category
            </legend>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Type Category"
            />
          </fieldset>

          <fieldset className="fieldset md:w-1/2 ml-4">
            <legend className="fieldset-legend text-black text-2xl">
              Details
            </legend>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Type Coffee Details"
            />
          </fieldset>
        </div>
        {/* form photo */}
        <div className="md:flex mb-6">
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend text-black text-2xl">
              photo
            </legend>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Type photo"
            />
          </fieldset>
        </div>
        <input type="submit" value="submit" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
