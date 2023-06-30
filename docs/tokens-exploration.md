# Tokens Explorations

by Marcelo Paiva

Accessibility tokens are design tools used to create user interfaces (UIs) that are accessible and user-friendly for all individuals, regardless of any visual, auditory, cognitive, or physical disabilities they may have. These tokens encapsulate the best practices from the Web Content Accessibility Guidelines (WCAG), an internationally recognized set of recommendations for improving web accessibility.

These design tokens are similar to variables in programming. They represent reusable, atomic elements, such as colors, spacing, typography, or contrast, that can be referenced across different parts of an interface design. By applying these tokens, designers can ensure that their products meet various accessibility standards, thus providing a more inclusive user experience.

The tokens are typically mapped to specific WCAG criteria and are used to create consistent, accessible experiences across different parts of a product. They encapsulate considerations such as:

* Text size and spacing for low-vision users.
* Contrast levels for users with color vision deficiencies.
* Keyboard-friendly navigation for users with motor impairments.
* Understandable content and error prevention for users with cognitive impairments.

Implementing these tokens within the design and development process can enhance the usability of web content for a wider range of people, promoting digital inclusivity. This wiki aims to document various accessibility tokens, their application, and their relation to WCAG guidelines, providing a valuable resource for designers and developers aiming to make their digital content more accessible.


## Our Goal

The primary objective of this exploration is to propose comprehensive and practical design tokens for each WCAG success criterion. The aim is not only to adhere to the accessibility guidelines but also to simplify the implementation process, making it more intuitive for designers and developers.

The exploration approach is rooted in understanding the WCAG guidelines and translating them into meaningful, reusable design tokens. Each token is devised with a specific WCAG criterion in mind, which ensures that every aspect of web accessibility is given due consideration.

We strive to provide clear definitions and practical examples of each token to aid comprehension and facilitate implementation. While WCAG guidelines serve as a robust foundation, the intention behind this exploration is to go beyond mere compliance. We aspire to encourage the design and development community to incorporate these tokens into their regular workflow, thus promoting the creation of more accessible digital experiences for all users.

Ultimately, our goal is to bridge the gap between WCAG guidelines and everyday design practices, fostering a more inclusive and accessible digital landscape.


## Accessibility Tokens Exploration

The information presented here represents an effort to align accessibility tokens with each WCAG success criterion. As this exploration evolves, we are committed to providing thorough documentation for each token, complete with practical examples. To ensure the effectiveness and accuracy of our approach, we look forward to engaging in discussions with the W3C community and receiving their valuable feedback.

### 1. **Perceivable**

- 1.1.1 Non-text Content A 2.0 - `AltTextToken`
- 1.2.1 Audio-only and Video-only (Prerecorded) A 2.0 - `AltMediaToken`
- 1.2.2 Captions (Prerecorded) A 2.0 - `CaptionDisplayToken`
- 1.2.3 Audio Description or Media Alternative (Prerecorded) A 2.0 - `AudioDescToken`
- 1.2.4 Captions (Live) AA 2.0 - `LiveCaptionToken`
- 1.2.5 Audio Description (Prerecorded) AA 2.0 - `PreRecordedAudioDescToken`
- 1.2.6 Sign Language (Prerecorded) AAA 2.0 - `SignLangVideoToken`
- 1.2.7 Extended Audio Description (Prerecorded) AAA 2.0 - `ExtendedAudioDescToken`
- 1.2.8 Media Alternative (Prerecorded) AAA 2.0 - `AltMediaToken`
- 1.2.9 Audio-only (Live) AAA 2.0 - `LiveAudioToken`
- 1.3.1 Info and Relationships A 2.0 - `SemanticStructureToken`
- 1.3.2 Meaningful Sequence A 2.0 - `LogicalFlowToken`
- 1.3.3 Sensory Characteristics A 2.0 - `SensoryHintToken`
- 1.3.4 Orientation AA 2.1 - `ContentOrientationToken`
- 1.3.5 Identify Input Purpose AA 2.1 - `InputPurposeToken`
- 1.3.6 Identify Purpose AAA 2.1 - `ContentPurposeToken`
- 1.4.1 Use of Color A 2.0 - `ColorMeaningToken`
- 1.4.2 Audio Control A 2.0 - `AudioControlToken`
- 1.4.3 Contrast (Minimum) AA 2.0 - `MinimumContrastToken`
- 1.4.4 Resize Text AA 2.0 - `ResizableTextToken`
- 1.4.5 Images of Text AA 2.0 - `TextImageToken`
- 1.4.6 Contrast (Enhanced) AAA 2.0 - `EnhancedContrastToken`
- 1.4.7 Low or No Background Audio AAA 2.0 - `BackgroundAudioToken`
- 1.4.8 Visual Presentation AAA 2.0 - `VisualPresentationToken`
- 1.4.9 Images of Text (No Exception) AAA 2.0 - `NoTextImageToken`
- 1.4.10 Reflow AA 2.1 - `ReflowToken`
- 1.4.11 Non-Text Contrast AA 2.1 - `NonTextContrastToken`
- 1.4.12 Text Spacing AA 2.1 - `TextSpacingToken`
- 1.4.13 Content on Hover or Focus AA 2.1 - `HoverFocusContentToken`

### 2. **Operable**

- 2.1.1 Keyboard A 2.0 - `KeyboardAccessibleToken`
- 2.1.2 No Keyboard Trap A 2.0 - `NoTrapToken`
- 2.1.3 Keyboard (No Exception) AAA 2.0 - `CompleteKeyboardAccessibilityToken`
- 2.1.4 Character Key Shortcuts A 2.1 - `KeyShortcutToken`
- 2.2.1 Timing Adjustable A 2.0 - `TimingAdjustToken`
- 2.2.2 Pause, Stop, Hide A 2.0 - `MediaControlToken`
- 2.2.3 No Timing AAA 2.0 - `NoTimingToken`
- 2.2.4 Interruptions AAA 2.0 - `InterruptionControlToken`
- 2.2.5 Re-authenticating AAA 2.0 - `ReauthenticateToken`
- 2.2.6 Timeouts AAA 2.1 - `TimeoutNotificationToken`
- 2.3.1 Three Flashes or Below Threshold A 2.0 - `FlashThresholdToken`
- 2.3.2 Three Flashes AAA 2.0 - `StrictFlashThresholdToken`
- 2.4.1 Bypass Blocks A 2.0 - `BypassBlockToken`
- 2.4.2 Page Titled A 2.0 - `PageTitleToken`
- 2.4.3 Focus Order A 2.0 - `FocusOrderToken`
- 2.4.4 Link Purpose (In Context) A 2.0 - `LinkContextToken`
- 2.4.5 Multiple Ways AA 2.0 - `NavigationAlternativesToken`
- 2.4.6 Headings and Labels AA 2.0 - `HeadingsLabelsToken`
- 2.4.7 Focus Visible AA 2.0 - `FocusVisibilityToken`
- 2.4.8 Location AAA 2.0 - `LocationIndicatorToken`
- 2.4.9 Link Purpose (Link Only) AAA 2.0 - `LinkOnlyPurposeToken`
- 2.4.10 Section Headings AAA 2.0 - `SectionHeadingToken`
- 2.5.1 Pointer Gestures A 2.1 - `PointerGestureAdaptationToken`
- 2.5.2 Pointer Cancellation A 2.1 - `PointerCancellationToken`
- 2.5.3 Label in Name A 2.1 - `LabelNameMatchToken`
- 2.5.4 Motion Actuation A 2.1 - `MotionActuationControlToken`
- 2.5.5 Target Size AA 2.1 - `TargetSizeToken`
- 2.5.6 Concurrent Input Mechanisms AAA 2.1 - `MultipleInputMethodsToken`

### 3. **Understandable**

- 3.1.1 Language of Page A 2.0 - `PageLanguageToken`
- 3.1.2 Language of Parts AA 2.0 - `PartLanguageToken`
- 3.1.3 Unusual Words AAA 2.0 - `GlossaryToken`
- 3.1.4 Abbreviations AAA 2.0 - `AbbreviationsToken`
- 3.1.5 Reading Level AAA 2.0 - `ReadingLevelToken`
- 3.1.6 Pronunciation AAA 2.0 - `PronunciationToken`
- 3.2.1 On Focus A 2.0 - `FocusReactionToken`
- 3.2.2 On Input A 2.0 - `InputChangeReactionToken`
- 3.2.3 Consistent Navigation AA 2.0 - `ConsistentNavigationToken`
- 3.2.4 Consistent Identification AA 2.0 - `ConsistentIdentificationToken`
- 3.2.5 Change on Request AAA 2.0 - `ChangeOnRequestToken`
- 3.3.1 Error Identification A 2.0 - `ErrorIdentificationToken`
- 3.3.2 Labels or Instructions A 2.0 - `LabelInstructionToken`
- 3.3.3 Error Suggestion AA 2.0 - `ErrorSuggestionToken`
- 3.3.4 Error Prevention (Legal, Financial, Data) AA 2.0 - `PreventCriticalErrorToken`
- 3.3.5 Help AAA 2.0 - `HelpAvailabilityToken`
- 3.3.6 Error Prevention (All) AAA 2.0 - `PreventAllErrorToken`

### 4. **Robust**

- 4.1.1 Parsing A 2.0 - `SyntaxCheckToken`
- 4.1.2 Name, Role, Value A 2.0 - `ElementInfoToken`
- 4.1.3 Status Messages AA 2.1 - `StatusMessageToken`


