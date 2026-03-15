import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactForm {
    public func compareByTimestamp(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Int.compare(form2.timestamp, form1.timestamp);
    };
  };

  let contactForms = Map.empty<Principal, ContactForm>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let contactForm : ContactForm = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactForms.add(caller, contactForm);
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    if (caller.toText() != "2vxsx-fae") {
      Runtime.trap("Only admin can retrieve all contact forms. ");
    };
    contactForms.values().toArray().sort(ContactForm.compareByTimestamp);
  };
};
